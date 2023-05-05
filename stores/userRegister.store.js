import { create } from 'zustand';
import API from '../api';
import getImageUrl from '../utils/image';

const emptyState = {
  user: null,
  accessToken: '',
  isLoading: false,
  error: '',
};
const userRegister = create((set) => ({
  ...emptyState,
  register: async ({ email, password, name, phoneNumber, image }) => {
    set({ ...emptyState, isLoading: true });
    try {
      let profilePictureUrl = '';
      if (image) {
        const { type, uri } = image;
        const { url } = await getImageUrl({ type, uri, name: `${email}-profile` });
        profilePictureUrl = url;
      }
      const response = await API.post('/auth/register', {
        email,
        password,
        name,
        phoneNumber,
        profilePictureUrl,
      });

      if (response.status !== 200) {
        set({ ...emptyState, error: 'Access Denied' });
      } else {
        const user = await response.json();
        set({ ...emptyState, user });
      }
    } catch (error) {
      console.log(error);
      set({ ...emptyState, error: 'Error while trying to register the user' });
    }
  },
}));

export default userRegister;
