import { create } from 'zustand';
import API from '../api';
import userStore from './user.store';

const emptyState = {
  events: null,
  isLoading: false,
  error: '',
};

const myEventsStore = create((set) => ({
  ...emptyState,
  fetchEvents: async () => {
    set({ isLoading: true });
    try {
      const {
        user: { _id: userId },
        accessToken,
      } = userStore.getState();
      const response = await API.get(`/user/${userId}/events`, accessToken);
      const json = await response.json();
      set({ ...emptyState, events: json });
    } catch (error) {
      set({ ...emptyState, error: 'There was an error while trying to fetch the vents ' });
    }
  },
}));

export default myEventsStore;
