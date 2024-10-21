import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import homeGroups from './modules/homeGroups';

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        homeGroups,
    }
});