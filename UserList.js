import { User } from "./User.js";

class UserList {
    constructor(users) {
        this.element = $('<ul id="userList"></ul>');
        this.users = [];
        users.forEach((user) => {
            this.users.push(new User(user));
        });
        this.page = $('#page');
    }

    render() {
        this.users.forEach((user) => {
            let listItem = $('<li>' + user.username + '</li>');
            listItem.click(() => {
                this.page.children().eq(1).remove();
                this.page.append(user.render());
            });
            this.element.append(listItem);
        });
        return this.element;
    }
}

export { UserList };