import axios from 'axios';
import api from '../api/api';

export default {
    async fetchUsers({ commit }) {
        try {
            commit('setLoading', true);
            let users = api.getUsers();
            if (users.length < 1) {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                users = res.data;
            }
            await commit('setUsers', users)

        } catch (error) {
            commit('setError', error);
        } finally {
            commit('setLoading', false);
        }
    },
    deleteUsers({ commit, getters }) {
        const users = getters.filteredRecordsByChosenIds;
        api.deleteUsers(users)
        commit('setUsers', users);
        commit('setChosenIds');
    },
    sortUsers({ commit, getters }) {
        commit('setUsers', getters.sortedRecords);
        commit('setSort');
    },
    addUser({ commit, state }) {
        const user = { id: state.users.length + 1, name: state.fullName, email: state.email, phone: state.phone };
        api.saveUser(user);
        commit('setNewUser', user)
        commit('setFullName', '');
        commit('setEmail', '');
        commit('setPhone', '');
    },
    deleteChosenId({ commit, state }, id) {
        const i = state.chosenIds.indexOf(id);
        commit('cutChosenIds', i);
    },
}