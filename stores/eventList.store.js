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
      let query = '';
      const dateToString = new Date().toLocaleDateString('EN-us');

      if (eventName) {
        query = `?title=${eventName}&date=${dateToString}`;
      } else {
        query = `?date=${dateToString}`;
      }

      const response = await API.get(`/event${query}`);
      const json = await response.json();
      set({ ...emptyState, events: json });
    } catch (error) {
      set({ ...emptyState, error: 'There was an error while trying to fetch the vents ' });
    }
  },
}));

export default eventList;
