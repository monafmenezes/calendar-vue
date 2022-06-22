import { createStore } from 'vuex'
import events from './modules/events'

const store = createStore({
  modules: { events }
})

export default store
