import { createStore } from 'vuex';

const store = createStore({
    state: {
        events: [
            { date: '2024-09-16', startTime: '12:00', endTime: '20:00', breakStart: '14:00', breakEnd: '15:00' },
            { date: '2024-09-20', startTime: '12:00', endTime: '20:00', breakStart: '14:00', breakEnd: '15:00' },
        ],
    },
    getters: {
        getEvents: (state) => state.events,
    },
});

export default store;
