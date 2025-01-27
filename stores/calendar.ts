import { defineStore } from 'pinia'

export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    events: [
      {
        id: '1',
        title: 'Team Meeting',
        timeRange: '9:00 AM - 10:00 AM',
        color: '#2C87F2',
        date: '14',
        time: '9:00 AM',
        avatars: [],
        attendeeCount: 5,
      },
      // Add more events here
    ],
    activeView: 'Weekly',
  }),
  actions: {
    moveEvent(eventId: string, newDate: string) {
      const event = this.events.find(e => e.id === eventId)
      if (event) {
        event.date = newDate
      }
    },
  },
})
