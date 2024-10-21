export default {
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
    },
    ADD_SERVICE(state, newService) {
        state.services.push(newService);
    },
};