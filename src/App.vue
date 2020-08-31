<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
    <div class="container mt-3">
      <div class="row">
        <div class="col-6 offset-3">
          <ButtonEmptyCalendar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek";
import CalendarEntry from "./components/CalendarEntry";
import ButtonEmptyCalendar from "./components/ButtonEmptyCalendar";

export default {
  name: "App",
  components: { CalendarWeek, CalendarEntry, ButtonEmptyCalendar },
};
</script>


