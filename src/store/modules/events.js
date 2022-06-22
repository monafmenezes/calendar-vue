import { getEventIndexById } from '../../services/utils'
import { addDays } from 'date-fns'

export default {
  state: {
    events: [
      {
        id: 10,
        title: 'All day event',
        description: '',
        date: new Date(),
        allDay: true
      },
      {
        id: 20,
        title: 'Timed event',
        description: '',
        start: addDays(new Date(), 1)
      },
      {
        id: 30,
        title: 'Timed event',
        description: '',
        start: addDays(new Date(), 2)
      }
    ],
    modalOpen: false,
    newTask: '',
    weekendsVisible: true,
    description: ''
  },
  getters: {
    events: state => state.events,
    weekendsVisible: state => state.weekendsVisible,
    modalOpen: state => state.modalOpen,
    newTask: state => state.newTask,
    newDescription: state => state.description
  },
  mutations: {
    createEvent (state, event) {
      state.events.push(event)
    },
    updateEvent (state, updatedEvent) {
      const index = getEventIndexById(state, updatedEvent.id)

      if (index === -1) {
        return console.warn(`Unable to update event (id ${updatedEvent.id})`)
      }

      return state.events.splice(index, 1, {
        ...state.events[index],
        title: updatedEvent.title,
        start: updatedEvent.start,
        end: updatedEvent.end,
        date: updatedEvent.date
      })
    },
    deleteEvent (state, eventId) {
      const index = getEventIndexById(state, eventId)

      if (index === -1) {
        return console.warn(`Unable to delete event (id ${eventId})`)
      }

      return state.events.splice(index, 1)
    },
    setWeekendsEnabled (state, enabled) {
      state.weekendsVisible = enabled
    },
    modalFalse (state) {
      state.modalOpen = !state.modalOpen
    },
    newTask (state, payload) {
      state.newTask = payload
    },
    newDescription(state, payload) {
      state.description = payload
    }
  },
  actions: {
    modalFalse ({ commit }) {
      commit('modalFalse')
    },
    createEvent ({ commit }, event) {
      return commit('createEvent', event)
    },
    updateEvent ({ commit }, updatedEvent) {
      return commit('updateEvent', updatedEvent)
    },
    deleteEvent ({ commit }, eventId) {
      return commit('deleteEvent', eventId)
    },
    setweekendsVisible ({ commit }, enabled) {
      return commit('setWeekendsEnabled', enabled)
    },
    newTask ({ commit }, payload) {
      return commit('newTask', payload)
    },
    newDescription ({ commit }, payload) {
      return commit('newDescription', payload)
    }
  }
}
