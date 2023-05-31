import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../api';

const emptyState = {
  user: null,
  accessToken: '',
  isLoading: false,
  error: '',
  notifyDataRefresh: false,
};
const userStore = create((set) => ({
  ...emptyState,
  setCachedUser: async ({ user, accessToken }) => {
    set({ user, accessToken });
    const response = await API.post('/auth/validate', { userId: user._id, accessToken });
    if (response.status !== 200) {
      set({ ...emptyState, error: 'Access Denied' });
    } else {
      const { user: refreshedUser, accessToken: newAccessToken } = await response.json();
      set({ user: refreshedUser, accessToken: newAccessToken });
    }
  },
  login: async (email, password) => {
    set({ ...emptyState, isLoading: true });
    try {
      const response = await API.post('/auth/login', { email, password });
      if (response.status !== 200) {
        set({ ...emptyState, error: 'Access Denied' });
      } else {
        const { user, accessToken } = await response.json();
        await AsyncStorage.setItem('user', JSON.stringify({ user, accessToken }));
        set({ ...emptyState, user, accessToken });
      }
    } catch (error) {
      set({ ...emptyState, error: 'Error while trying to fetch user info' });
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem('user');
    set({ ...emptyState });
  },
}));

export default userStore;
