export default {
    clearActiveDays({ commit }) {
        commit('CLEAR_ACTIVE_DAYS');
    },
    toggleModal({ commit }, value) {
        commit('SET_MODAL_VISIBLE', value);
    },
    setModalComponent({ commit }, component) {
        commit('SET_MODAL_COMPONENT', component);
    },
    resetModalComponent({ commit }) {
        commit('RESET_MODAL_COMPONENT');
    },
}