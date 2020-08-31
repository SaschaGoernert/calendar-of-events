<template>
  <div class="card" :class="day.active ? 'border-color-vue2' : ''">
    <div
      class="card-header text-center"
      :class="day.active ? 'bg-vue2' : 'bg-vue'"
      style="cursor: pointer"
      @click="setActiveDay(day.id)"
    >
      <strong>{{day.fullName}}</strong>
    </div>
    <div class="card-body">
      <div>{{day.id}}</div>
      <CalendarEvent v-for="event in day.events" :key="event.id" :event="event" :day="day" />
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent";
import { store } from "../store";
export default {
  name: "CalendarDay",
  props: ["day"],
  components: { CalendarEvent },
  methods: {
    setActiveDay(dayId) {
      store.setActiveDay(dayId);
    },
  },
};
</script>

<style scoped>
.bg-vue {
  background-color: rgb(52, 73, 94);
  color: white;
}

.bg-vue2 {
  background-color: rgb(65, 184, 131);
}

.border-color-vue2 {
  border-bottom-color: rgb(65, 184, 131);
  border-bottom-width: 4px;
}
</style>