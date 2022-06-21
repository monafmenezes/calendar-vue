<template>
  <div>
    <FullCalendar :options="calendarOptions">
      <template #eventContent="{ timeText, event }">
        <b>{{ timeText }}</b>
        <i>{{ event.title }}</i>
      </template>
    </FullCalendar>
    <d-modal v-if="openModal" />
  </div>
</template>

<script>
import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { mapGetters, mapActions } from "vuex";
import DModal from "./DModal.vue";

export default {
  components: { FullCalendar, DModal },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        initialView: "dayGridMonth",
        headerToolbar: {
          left: "prev today next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        events: this.events,
      },
    };
  },
  computed: {
    ...mapGetters(["events"]),

    config() {
      return {
        ...this.calendarOptions,
        ...this.eventHandlers,
      };
    },
    eventHandlers() {
      return {};
    },
    openModal() {
      return this.$store.state.events.modalOpen
    },
  },

  methods: {

  },
};
</script>

<style>
</style>