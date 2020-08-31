import { calendarWeekData } from "./data";
import { uuidv4 } from "./util";

export const store = {
  state: {
    calendarWeekData,
  },
  getActiveDay() {
    return this.state.calendarWeekData.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.calendarWeekData.forEach((day) => {
      day.id === dayId ? (day.active = true) : (day.active = false);
    });
  },
  storeEvent(evenTitle, eventColor) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({
      id: uuidv4(),
      title: evenTitle,
      edit: false,
      color: eventColor,
    });
  },
  editEvent(dayId, eventId) {
    this.resetEditMode();
    const day = getDay(this.state, dayId);
    const event = getEvent(day, eventId);
    event.edit = true;
  },
  resetEditMode() {
    this.state.calendarWeekData.forEach((day) =>
      day.events.forEach((event) => (event.edit = false))
    );
  },
  updateEvent(dayId, eventId, newEventTitle) {
    const day = getDay(this.state, dayId);
    const event = getEvent(day, eventId);
    event.title = newEventTitle;
    event.edit = false;
    console.log("event", event);
  },
  deleteEvent(dayId, eventId) {
    const day = getDay(this.state, dayId);
    const filteredEvents = day.events.filter((event) => event.id !== eventId);
    day.events = filteredEvents;
  },
  emptyCalendar() {
    this.state.calendarWeekData.forEach((day) => {
      day.events = [];
    });
  },
};

const getDay = (state, dayId) => {
  return state.calendarWeekData.find((day) => day.id === dayId);
};

const getEvent = (day, eventId) => {
  return day.events.find((event) => event.id === eventId);
};
