<template>
  <div class="container mt-5">
    <div class="row">
      <div class="mobile-view">
        <div class="card">
          <div class="card-header text-center bg-vue">
            <h5>
              Neuer Termin für
              <strong>{{getNameOfActiveDay}}</strong>
            </h5>
          </div>
          <div class="card-body">
            <div class="alert alert-danger" v-if="error">Der Titel darf nicht leer sein!</div>
            <input type="text" class="form-control" placeholder="Neuer Termin" v-model="eventTitle" />
            <div class="mt-3 text-center">
              <span
                class="alert mr-2 sqaure"
                style="cursor: pointer"
                v-for="(color, index) in ['primary', 'success', 'info', 'warning', 'danger']"
                :key="index"
                :class="[eventColor === color ? getBorderColor : '', 'alert-' + color]"
                @click="changeColor(color)"
              ></span>
            </div>
            <hr />
            <button class="btn bg-vue2 btn-block" @click="storeEvent(eventTitle)">Eintragen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "CalendarEntry",
  data() {
    return { eventColor: "primary", eventTitle: "", error: false };
  },
  methods: {
    changeColor(color) {
      this.eventColor = color;
    },
    storeEvent(eventTitle) {
      if (eventTitle !== "") {
        store.storeEvent(eventTitle, this.eventColor);
        this.eventTitle = "";
        this.eventColor = "primary";
      } else {
        this.error = true;
      }
    },
  },
  computed: {
    getBorderColor() {
      return "border border-" + this.eventColor;
    },
    getNameOfActiveDay() {
      const activeDay = store.getActiveDay();
      return activeDay ? activeDay.fullName : "";
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

.sqaure {
  height: 10rem;
  width: 10rem;
}

@media (max-width: 600px) {
  .mobile-view {
    width: 100%;
  }

  .row {
    margin-right: 0;
    margin-left: 0;
  }
}

@media (min-width: 600px) {
  .mobile-view {
    width: 50%;
    margin-left: 25%;
  }
}
</style>