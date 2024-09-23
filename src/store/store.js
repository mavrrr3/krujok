import { createStore } from 'vuex';

const store = createStore({
    state: {
        events: [
            { date: '2024-09-16', startTime: '12:00', endTime: '20:00', breakStart: '14:00', breakEnd: '15:00' },
            { date: '2024-09-20', startTime: '12:00', endTime: '20:00', breakStart: '14:00', breakEnd: '15:00' },
            { date: '2024-09-21', startTime: '12:00', endTime: '21:00', breakStart: '14:00', breakEnd: '15:00' },
        ],
        activeDays: [],
    },
    getters: {
        getEvents: (state) => state.events,
        activeDays: (state) => state.activeDays,
    },
    mutations: {
        ADD_EVENT(state, newEvent) {
            state.events.push(newEvent);
        },

    },
    actions: {

    },
});

export default store;
