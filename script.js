import { UserList } from "./UserList.js";

const entrypoint = 'https://jsonplaceholder.typicode.com';
let userList;

$(document).ready(() => {
    let page = $('#page');

    $.ajax({
        url: entrypoint + '/users',
        method: 'GET'
    }).done((res) => {
        userList = new UserList(res);
        page.append(userList.render());
    });
});