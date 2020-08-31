<template>
  <div class="alert text-center" :class="getEventColor">
    <div v-if="!event.edit">
      <div>{{event.title}}</div>
      <div>
        <i class="fas fa-edit mr-2" @click="editEvent(day.id, event.id)"></i>
        <i class="fas fa-trash-alt" @click="deleteEvent(day.id, event.id)"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input type="text" class="form-control" :placeholder="event.title" v-model="eventtitle" />
      <hr />
      <i class="fas fa-check" @click="updateEvent(day.id, event.id, eventtitle)"></i>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CalendarEvent",
  props: ["event", "day"],
  data() {
    return { eventtitle: "" };
  },
  methods: {
    editEvent(dayId, eventId) {
      store.editEvent(dayId, eventId);
    },
    deleteEvent(dayId, eventId) {
      store.deleteEvent(dayId, eventId);
    },
    updateEvent(dayId, eventId, newEventTitle) {
      if (newEventTitle === "") {
        newEventTitle = this.event.title;
      }
      store.updateEvent(dayId, eventId, newEventTitle);
      this.eventtitle = "";
    },
  },
  computed: {
    getEventColor() {
      return `alert-${this.event.color}`;
    },
  },
};
</script>

<style scoped>
i {
  cursor: pointer;
}
</style>