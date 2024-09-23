import { createStore } from 'vuex';

const store = createStore({
    state: {
        events: [
            { date: '2024-09-16', startTime: '12:00', endTime: '20:00', breakStart: '14:00', breakEnd: '15:00' },
            { date: '2024-09-20', startTime: '12:00', endTime: '20:00', breakStart: '14:00', breakEnd: '15:00' },
            { date: '2024-09-21', startTime: '12:00', endTime: '21:00', breakStart: '14:00', breakEnd: '15:00' },
        ],
        activeDays: [],
        modalVisible: false,
        currentModalComponent: null,
    },
    getters: {
        getEvents: (state) => state.events,
        activeDays: (state) => state.activeDays,
        modalVisible: (state) => state.modalVisible,
        currentModalComponent: (state) => state.currentModalComponent,
    },
    mutations: {
        ADD_EVENT(state, newEvent) {
            state.events.push(newEvent);
        },
        CLEAR_ACTIVE_DAYS(state) {
            state.activeDays = [];
        },
        SET_MODAL_VISIBLE(state, value) {
            state.modalVisible = value;
        },
        SET_MODAL_COMPONENT(state, component) {
            state.currentModalComponent = component;
        },
        RESET_MODAL_COMPONENT(state) {
            state.currentModalComponent = null;
        }
    },
    actions: {
        clearActiveDays({ commit }) {
            commit('CLEAR_ACTIVE_DAYS');
        },
        toggleModal({ commit }, value) {
            commit('SET_MODAL_VISIBLE', value);
        },
        setModalComponent({ commit }, component) {
            commit('SET_MODAL_COMPONENT', component);
        },
        resetModalComponent({commit}) {
            commit('RESET_MODAL_COMPONENT');
        }
    },
});

export default store;
