import { create } from 'zustand';
import API from '../api';
import userStore from './user.store';

const emptyState = {
  event: null,
  isLoading: false,
  error: '',
  isInteracting: false,
  interactionSuccessMessage: '',
  interactionErrorMessage: '',
};
const eventStore = create((set) => ({
  ...emptyState,
  fetchEvent: async (eventId) => {
    set({ isLoading: true });
    try {
      const response = await API.get(`/event/${eventId}`);
      const event = await response.json();
      set({ ...emptyState, event });
    } catch (error) {
      set({ ...emptyState, error: 'There was an error while trying to fetch the vents ' });
    }
  },
  joinEvent: async (eventId) => {
    set({ isInteracting: true, interactionSuccessMessage: '', interactionErrorMessage: '' });
    try {
      const {
        user: { _id: userId },
        accessToken,
        setCachedUser,
      } = userStore.getState();
      const response = await API.post(`/event/${eventId}/join`, { userId }, accessToken);

      if (response.status !== 200) {
        set({ interactionErrorMessage: 'There was an error while joining the event' });
      } else {
        const { event, user } = await response.json();

        setCachedUser({ user, accessToken });
        set({ interactionSuccessMessage: 'There was an error while joining the event', event });
      }
    } catch (error) {
      set({ interactionErrorMessage: 'Error while joining the event' });
    }
    setTimeout(() => {
      set({ interactionErrorMessage: '', interactionSuccessMessage: '' });
    }, 1000);

    set({ isInteracting: false });
  },
  dismissEvent: async (eventId) => {
    const {
      user: { _id: userId },
      accessToken,
      setCachedUser,
    } = userStore.getState();

    try {
      const response = await API.post(`/event/${eventId}/dismiss`, { userId }, accessToken);

      if (response.status !== 200) {
        set({ interactionErrorMessage: 'There was an error while removing the event' });
      } else {
        const { event, user } = await response.json();
        setCachedUser({ user, accessToken });
        set({ interactionSuccessMessage: 'Event was removed from your list of events!', event });
      }
    } catch (error) {
      set({ interactionErrorMessage: 'Error while removing the event' });
    }
    set({ isInteracting: false });
  },
}));

export default eventStore;
