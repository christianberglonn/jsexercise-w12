const entrypoint = 'https://jsonplaceholder.typicode.com';

class User {
    constructor(props) {
        Object.assign(this, props);
        this.getPosts();
    }

    getPosts() {
        $.ajax({
            url: entrypoint + '/posts?userId=' + this.id
        }).done((res) => {
            this.posts = res;
        });
    }

    renderPosts() {
        console.log("Hej! :D");
    }

    render() {

        /*         let html = '<div class="userProfile">' +
                    '<h1>Name:</h1>' + this.name + '<br>' +
                    'Email:' + this.email + '<br>' +
                    '</div>'; */

        let userProfile = $(`
        <div class="userProfile">
            <h1>Name: ${this.username}</h1>
            <h3>Email: ${this.email}</h3> <br>
            <button>Display Posts</button>
        </div>
            `);

        userProfile.on('click', '.renderPosts', () => {
            this.renderPosts();
        });

        return userProfile;


    }
}

export { User }