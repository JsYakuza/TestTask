export default {
    setUsers(state, payload) {
        state.users = payload;
    },
    setNewUser(state, payload) {
        state.users.push(payload);
    },
    setFullName(state, name) {
        state.fullName = name;
    },
    setEmail(state, email) {
        state.email = email;
    },
    setPhone(state, phone) {
        state.phone = phone;
    },
    setLoading(state, loadingState) {
        state.loading = loadingState;
    },
    setError(state, errorText) {
        state.error = errorText;
    },
    setChosenId(state, id) {
        state.chosenIds.push(id);
    },
    cutChosenIds(state, index) {
        state.chosenIds.splice(index, 1);
    },
    setSort(state) {
        state.sort = !state.sort;
    },
    setChosenIds(state) {
        state.chosenIds = [];
    },
    setSearchString(state, str) {
        state.searchString = str;
    }
}