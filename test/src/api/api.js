export default {
    saveUser(user) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

    },
    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    },
    deleteUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
}