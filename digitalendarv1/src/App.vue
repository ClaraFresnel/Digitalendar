<template>
  <v-app id="dayspan" v-cloak>
    <ds-calendar-app
      ref="app"
      :calendar="calendar"
      :read-only="readOnly"
      @change="saveState"
    >
    <link rel="icon" href="<%= BASE_URL %>logo.ico">
      <template slot="title"> CalendarRé </template>

      <template slot="eventPopover" slot-scope="slotData">
        <ds-calendar-event-popover
          v-bind="slotData"
          :read-only="readOnly"
          @finish="saveState"
        ></ds-calendar-event-popover>
      </template>

      <template
        slot="eventCreatePopover"
        slot-scope="{ placeholder, calendar }"
      >
        <ds-calendar-event-create-popover
          :calendar-event="placeholder"
          :calendar="calendar"
          :close="$refs.app.$refs.calendar.clearPlaceholder"
          @create-edit="$refs.app.editPlaceholder"
          @create-popover-closed="saveState"
        ></ds-calendar-event-create-popover>
      </template>

      <template slot="eventTimeTitle" slot-scope="{ calendarEvent, details }">
        <div>
          <v-icon
            class="ds-ev-icon"
            v-if="details.icon"
            size="14"
            :style="{ color: details.forecolor }"
          >
            {{ details.icon }}
          </v-icon>
          <strong class="ds-ev-title">{{ details.title }}</strong>
        </div>
        <div class="ds-ev-description">
          {{ getCalendarTime(calendarEvent) }}
        </div>
      </template>

      <template slot="drawerBottom">
        <div class="pa-3">
          <section id="bottom1">
            <router-link class="router-link" to="/Sport">Sport</router-link> 
            <router-link class="router-link" to="/actualité">Actualité</router-link> 
            <router-link class="router-link" to="/crypto">Cryptomonnaie</router-link>
          </section>
          <section id="bottom2">
            <router-link class="router-link" to="/météo">Météo</router-link> 
            <router-link class="router-link" to="/horoscope">Horoscope</router-link> 
            <router-link class="router-link" to="/film_Série">Film/Série</router-link> 
          </section>
          <router-view />
          
        </div>
      </template>
    </ds-calendar-app>
  </v-app>
</template>

<script>
import { Calendar, Weekday, Month } from "dayspan";
import Vue from "vue";

export default {
  name: "app",

  data: () => ({
    storeKey: "dayspanState",
    calendar: Calendar.months(),
    readOnly: false,
    defaultEvents: [
      {
        data: {
          title: "Premier week-end",
          color: "#4CAF50",
        },
        schedule: {
          weekspanOfMonth: [0],
          dayOfWeek: [Weekday.FRIDAY],
          duration: 3,
          durationUnit: "days",
        },
      },
      {
        data: {
          title: "Fin du mois",
          color: "#000000",
        },
        schedule: {
          lastDayOfMonth: [1],
          duration: 1,
          durationUnit: "hours",
        },
      },
      {
        data: {
          title: "Fête des mères",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.MAY],
          dayOfWeek: [Weekday.SUNDAY],
          weekspanOfMonth: [1],
        },
      },
      {
        data: {
          title: "Nouvel an",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.JANUARY],
          dayOfMonth: [1],
        },
      },
      {
        data: {
          title: "Inauguration Day",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.JANUARY],
          dayOfMonth: [20],
        },
      },
      {
        data: {
          title: "Journée Martin Luther King Jr",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.JANUARY],
          dayOfWeek: [Weekday.MONDAY],
          weekspanOfMonth: [2],
        },
      },
      {
        data: {
          title: "Anniversaire de Geaorge Washington",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.FEBRUARY],
          dayOfWeek: [Weekday.MONDAY],
          weekspanOfMonth: [2],
        },
      },
      {
        data: {
          title: "jour des Morts au champ d'honneur",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.MAY],
          dayOfWeek: [Weekday.MONDAY],
          lastWeekspanOfMonth: [0],
        },
      },
      {
        data: {
          title: "Jour de l'indépendance",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.JULY],
          dayOfMonth: [4],
        },
      },
      {
        data: {
          title: "Fête du travail",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.SEPTEMBER],
          dayOfWeek: [Weekday.MONDAY],
          lastWeekspanOfMonth: [0],
        },
      },
      {
        data: {
          title: "Jour de Christophe Colomb",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.OCTOBER],
          dayOfWeek: [Weekday.MONDAY],
          weekspanOfMonth: [1],
        },
      },
      {
        data: {
          title: "Journée des anciens combattants",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.NOVEMBER],
          dayOfMonth: [11],
        },
      },
      {
        data: {
          title: "Halloween",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.NOVEMBER],
          dayOfWeek: [Weekday.THURSDAY],
          weekspanOfMonth: [3],
        },
      },
      {
        data: {
          title: "Noël",
          color: "#2196F3",
          calendar: "US Holidays",
        },
        schedule: {
          month: [Month.DECEMBER],
          dayOfMonth: [25],
        },
      },
    ],
  }),

  mounted() {
    window.app = this.$refs.app;

    this.loadState();
  },

  methods: {
    getCalendarTime(calendarEvent) {
      let sa = calendarEvent.start.format("a");
      let ea = calendarEvent.end.format("a");
      let sh = calendarEvent.start.format("h");
      let eh = calendarEvent.end.format("h");

      if (calendarEvent.start.minute !== 0) {
        sh += calendarEvent.start.format(":mm");
      }

      if (calendarEvent.end.minute !== 0) {
        eh += calendarEvent.end.format(":mm");
      }

      return sa === ea ? sh + " - " + eh + ea : sh + sa + " - " + eh + ea;
    },

    saveState() {
      let state = this.calendar.toInput(true);
      let json = JSON.stringify(state);

      localStorage.setItem(this.storeKey, json);
    },

    loadState() {
      let state = {};

      try {
        let savedState = JSON.parse(localStorage.getItem(this.storeKey));

        if (savedState) {
          state = savedState;
          state.preferToday = false;
        }
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }

      if (!state.events || !state.events.length) {
        state.events = this.defaultEvents;
      }

      state.events.forEach((ev) => {
        let defaults = this.$dayspan.getDefaultEventDetails();

        ev.data = Vue.util.extend(defaults, ev.data);
      });

      this.$refs.app.setState(state);
    },
  },
};
</script>

<style>
body,
html,
#app,
#dayspan {
  font-family: Roboto, sans-serif !important;
  width: 100%;
  height: 100%;
}

.v-btn--flat,
.v-text-field--solo .v-input__slot {
  background-color: #f5f5f5 !important;
  margin-bottom: 8px !important;
}

#bottom1{
  padding: 10px;
  text-align: left;
}
#bottom2{
  padding: 10px;
  text-align: left;
}
.router-link{
  color: #a6a6a6;
  margin-right: 10px;
  border: solid 1px;
  border-radius: 5px;
  text-decoration: none;
  padding: 1px;
  width: 200px;
  }

.router-link:hover{
  color: #4285f4;
  margin-right: 10px;
  border: solid 1px;
  border-radius: 5px;
  text-decoration: none;
  padding: 1px;
  outline: none;
  }

  .router-link:focus{
  color: #4285f4;
  margin-right: 10px;
  border: solid 1px;
  border-radius: 5px;
  text-decoration: none;
  padding: 1px;
  outline: none;
  }


</style>
