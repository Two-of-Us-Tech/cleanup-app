import { create } from 'zustand';
import API from '../api';

const emptyState = {
  user: null,
  accessToken: '',
  isLoading: false,
  error: '',
};
const authStore = create((set) => ({
  ...emptyState,
  login: async (email, password) => {
    set({ ...emptyState, isLoading: true });
    try {
      const response = await API.post('/auth/login', { email, password });
      if (response.status !== 200) {
        set({ ...emptyState, error: 'Access Denied' });
      } else {
        const { user, accessToken } = await response.json();
        set({ ...emptyState, user, accessToken });
      }
    } catch (error) {
      set({ ...emptyState, error: 'Error while trying to fetch user info' });
    }
  },
  logout: async () => {
    set({ ...emptyState });
  },
}));

export default authStore;
