export default {
    state: {
        events: [],
        modalOpen: true
    },
    getters: {
        getEvents: state => state.events,
        
    },
    mutations: {
        modalFalse(state) {
            state.modalOpen = !state.modalOpen
        }
    },
    actions: {
        modalFalse({commit}) {
            commit('modalFalse')
        }
    }
}