import { create } from 'zustand';
import API from '../api';
import eventStore from './event.store';

const emptyState = {
  user: null,
  accessToken: '',
  isLoading: false,
  error: '',
  notifyDataRefresh: false,
};
const userStore = create((set, get) => ({
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
  joinEvent: async (eventId) => {
    const { accessToken, user } = get();
    set({ isLoading: true, error: '' });
    try {
      const response = await API.post(`/event/${eventId}/join`, { userId: user._id }, accessToken);
      if (response.status !== 200) {
        set({ error: 'Error while trying to join the event', isLoading: false });
      } else {
        // Trigger event update
        const { fetchEvents, events } = eventStore.getState();
        fetchEvents();
        user.events?.push(events?.find((event) => event._id === eventId));
        set({ user, isLoading: false, notifyDataRefresh: true });
        setTimeout(() => {
          set({ notifyDataRefresh: false });
        }, 3000);
      }
    } catch (error) {
      set({ isLoading: false, error: 'Error while trying to join the event' });
    }
  },
  removeEvent: async (eventId) => {
    const { accessToken, user } = get();
    set({ isLoading: true, error: '' });

    try {
      const response = await API.post(
        `/event/${eventId}/dismiss`,
        { userId: user._id },
        accessToken
      );
      if (response.status !== 200) {
        set({ error: 'Error while trying to join the event', isLoading: false });
      } else {
        // Trigger event update
        const { fetchEvents } = eventStore.getState();
        fetchEvents();

        user.events = user.events?.filter((event) => event._id !== eventId);

        set({ user, isLoading: false, notifyDataRefresh: true });
        setTimeout(() => {
          set({ notifyDataRefresh: false });
        }, 3000);
      }
    } catch (error) {
      set({ isLoading: false, error: 'Error while trying to join the event' });
    }
  },
}));

export default userStore;
