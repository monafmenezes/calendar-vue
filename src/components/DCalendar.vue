<template>
  <div class="calendar container">
    <FullCalendar class="full-calendar" :options="config">
      <router-link>
        <template #eventContent="{ timeText, event }">
          <b>{{ timeText }}</b>
          <i>{{ event.title }}</i>
        </template>
      </router-link>
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
        events: this.$store.state.events.events,
        weekends: this.weekendsVisible,
      },
      eventHandlers: {
        dateClick: this.onDateClick,
        eventClick: this.onEventClick,
        eventDrop: this.onEventDrop,
        eventResize: this.onEventDrop,
        select: this.onDateSelect,
      },
    };
  },
  computed: {
    ...mapGetters(["events", "newTask", "weekendsVisible"]),

    config() {
      return {
        ...this.calendarOptions,
        ...this.eventHandlers,
      };
    },
    openModal() {
      return this.$store.state.events.modalOpen;
    },
  },

  methods: {
    ...mapActions([
      "createEvent",
      "updateEvent",
      "deleteEvent",
      "setweekendsVisible",
      "modalFalse",
    ]),
    onDateClick(payload) {
      const title = this.newTask;
      const description = "";

      if (!title) {
        return;
      }

      const id = (this.events.length + 1) * 10;
      const { start, end, date, allDay } = payload;

      return this.createEvent({
        id,
        title,
        description,
        date,
        start,
        end,
        allDay,
      });
    },
    onDateSelect(payload) {
      this.onDateClick(payload);
      this.$store.commit("newTask", "");
    },
    onEventClick({ event }) {
      const confirmed = confirm(
        `Are you sure you want to delete the event '${event.title}'?`
      );
      if (!confirmed) {
        return;
      }
      return this.deleteEvent(event.id);
    },
    onEventDrop({ event }) {
      return this.updateEvent(event);
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
}
</style>