import { uuidv4 } from "./util";

export const calendarWeekData = [
  {
    id: 1,
    shortName: "Mo",
    fullName: "Montag",
    active: true,
    events: [
      {
        id: uuidv4(),
        title: "Vue.Js lernen",
        edit: false,
        color: "success",
      },
    ],
  },
  {
    id: 2,
    shortName: "Di",
    fullName: "Dienstag",
    active: false,
    events: [
      {
        id: uuidv4(),
        title: "PM 3 Vorbereitung",
        edit: false,
        color: "success",
      },
    ],
  },
  {
    id: 3,
    shortName: "Mi",
    fullName: "Mittwoch",
    active: false,
    events: [
      {
        id: uuidv4(),
        title: "PM 3 Vorbereitung",
        edit: false,
        color: "success",
      },
    ],
  },
  {
    id: 4,
    shortName: "Do",
    fullName: "Donnerstag",
    active: false,
    events: [
      {
        id: uuidv4(),
        title: "Präsentation",
        edit: false,
        color: "warning",
      },
      {
        id: uuidv4(),
        title: "IT - Hardware lernen",
        edit: false,
        color: "info",
      },
    ],
  },
  {
    id: 5,
    shortName: "Fr",
    fullName: "Freitag",
    active: false,
    events: [
      {
        id: uuidv4(),
        title: "Präsentation",
        edit: false,
        color: "warning",
      },
    ],
  },
  {
    id: 6,
    shortName: "Sa",
    fullName: "Samstag",
    active: false,
    events: [
      {
        id: uuidv4(),
        title: "Präsentation",
        edit: false,
        color: "warning",
      },
    ],
  },
  {
    id: 7,
    shortName: "So",
    fullName: "Sonntag",
    active: false,
    events: [
      {
        id: uuidv4(),
        title: "Präsentation",
        edit: false,
        color: "warning",
      },
    ],
  },
];
