import { User } from "./User.js";

class UserList {
    constructor(users) {
        this.element = $('<ul id="userList"></ul>');
        this.users = [];
        users.forEach((user) => {
            this.users.push(new User(user));
        });
    }

    render() {
        this.users.forEach((user) => {
            this.element.append(user.render());
        });
        return this.element;
    }
}

export { UserList };