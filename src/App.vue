<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
    <div class="container mt-3">
      <div class="row">
        <div class="col mobile-view">
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

<style scoped>

@media (max-width: 600px) {
  .mobile-view {
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

}

@media (min-width: 600px) {
  .mobile-view {
    margin-left: 25%;
    margin-right: 25%;
    padding: 0;
  }
}

</style>
