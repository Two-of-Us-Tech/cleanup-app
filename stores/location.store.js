import { create } from 'zustand';
import API from '../api';

const emptyState = {
  events: null,
  isLoading: false,
  error: '',
};
const locationStore = create((set) => ({
  ...emptyState,
  fetchEvents: async (lat, lon) => {
    set({ isLoading: true });
    try {
      const response = await API.get(`/events/coordinates?latitude=${lat}&longitude=${lon}`);
      const json = await response.json();
      set({ ...emptyState, events: json });
    } catch (error) {
      set({ ...emptyState, error: 'There was an error while trying to fetch the vents ' });
    }
  },
}));

export default locationStore;
