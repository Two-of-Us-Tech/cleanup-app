import { create } from 'zustand';
import API from '../api';

const emptyState = {
  events: null,
  isLoading: false,
  error: '',
};
const eventList = create((set) => ({
  ...emptyState,
  fetchEvents: async (eventName) => {
    set({ isLoading: true });
    try {
      const response = await API.get(`/event${eventName ? `?title=${eventName}` : ''}`);
      const json = await response.json();
      set({ ...emptyState, events: json });
    } catch (error) {
      set({ ...emptyState, error: 'There was an error while trying to fetch the vents ' });
    }
  },
  setEvents: (events) => {
    set({ events });
  },
}));

export default eventList;
