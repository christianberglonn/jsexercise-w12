class User {
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.username = props.username;
        this.email = props.email;
        this.address = props.address;
    }

    getPosts() {
        $.ajax({
            url: entrypoint + '/posts?userId=' + this.id
        }).done((res) => {
            console.log(res);
        });
    }

    render() {
        let listItem = $('<li>' + this.name + '</li>');
        return listItem;
    }
}

export { User }