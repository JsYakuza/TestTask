export default {
    usersCount(state, getters) {
        return getters.filteredUsers.length;
    },
    filteredRecordsByChosenIds(state, getters) {
        return getters.filteredUsers.filter(user => !(state.chosenIds.indexOf(user.id) !== -1));
    },
    sortedRecords(state, getters) {
        return state.sort
            ? getters.filteredUsers.sort(
                (current, next) => current.name.toLowerCase().localeCompare(next.name.toLowerCase())
            )
            : getters.filteredUsers.reverse();
    },
    filteredUsers(state) {
        return state.users.filter(user => {
            return user.name.toLowerCase().includes(state.searchString)
                || user.email.toLowerCase().includes(state.searchString)
                || user.phone.toLowerCase().includes(state.searchString);
        });
    }
}