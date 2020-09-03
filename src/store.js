import { calendarWeekData } from "./data";
import { uuidv4 } from "./util";

if (!localStorage.getItem("calendar")) {
  localStorage.setItem("calendar", JSON.stringify(calendarWeekData));
}

export const store = {
  state: {
    calendarWeekData: JSON.parse(localStorage.getItem("calendar")),
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

    updateCalendar(this.state.calendarWeekData);
  },
  editEvent(dayId, eventId) {
    this.resetEditMode();
    const day = getDay(this.state, dayId);
    const event = getEvent(day, eventId);
    event.edit = true;
    updateCalendar(this.state.calendarWeekData);
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
    updateCalendar(this.state.calendarWeekData);
  },
  deleteEvent(dayId, eventId) {
    const day = getDay(this.state, dayId);
    const filteredEvents = day.events.filter((event) => event.id !== eventId);
    day.events = filteredEvents;

    updateCalendar(this.state.calendarWeekData);
  },
  emptyCalendar() {
    this.state.calendarWeekData.forEach((day) => {
      day.events = [];
    });

    updateCalendar(this.state.calendarWeekData);
  },
};

const getDay = (state, dayId) => {
  return state.calendarWeekData.find((day) => day.id === dayId);
};

const getEvent = (day, eventId) => {
  return day.events.find((event) => event.id === eventId);
};

const updateCalendar = (calendarWeekData) => {
  localStorage.setItem("calendar", JSON.stringify(calendarWeekData));
};
