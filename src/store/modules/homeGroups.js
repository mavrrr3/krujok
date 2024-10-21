import { api } from '../api';

//import folderIcon from '@/assets/icons/folder.svg';
import queueIcon from '@/assets/icons/queue.svg';
import calendarIcon from '@/assets/icons/calendar.svg';
import groupIcon from '@/assets/icons/group.svg';
import checkIcon from '@/assets/icons/check.svg';

const state = {
    allGroups: {},
    myGroups: {},
    isLoading: false,
    error: null,
};

const mutations = {
    SET_ALL_GROUPS(state, array) {
        state.allGroups = array;
    },
    SET_MY_GROUPS(state, array) {
        state.myGroups = array;
    },
    SET_LOADING(state, isLoading) {
        state.isLoading = isLoading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

const actions = {
    async fetchHomeGroups({ commit }) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
            const response = await api('api/mygroups');

            const data = await response.json();
            const myGroups = [];

            for (const index in data) {
                switch (data[index].type_id) {
                    case 1:
                        data[index].text = 'Запись';
                        data[index].icon = calendarIcon;
                        break;
                    case 2:
                        data[index].text = 'Очередь';
                        data[index].icon = queueIcon;
                        break;
                    case 3:
                        data[index].text = 'Запись в группу';
                        data[index].icon = groupIcon;
                        break;
                    case 4:
                        data[index].text = 'Чеклист';
                        data[index].icon = checkIcon;
                        break;
                }
                if (data[index].moderator) myGroups.push(data[index]);
            }

            console.log("Данные получены:", data);

            commit('SET_ALL_GROUPS', data);
            commit('SET_MY_GROUPS', myGroups);

        } catch (error) {
            console.error("data processing error:", error.message);
            commit('SET_ERROR', true);
        } finally {
            commit('SET_LOADING', false);
        }
    },
};

const getters = {
    allGroups: (state) => state.allGroups,
    myGroups: (state) => state.myGroups,
    isLoading: (state) => state.isLoading,
    getError: (state) => state.error,
};

export default {
    state,
    mutations,
    actions,
    getters
};