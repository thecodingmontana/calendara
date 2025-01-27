export const useCalendarStore = defineStore("calendar", {
  state: () => ({
    events: [],
    activeView: "Weekly",
  }),
  actions: {
    setView(view: string) {
      this.activeView = view;
    },
    // addEvent(event: any) {
    //   this.events.push(event);
    // },
  },
});