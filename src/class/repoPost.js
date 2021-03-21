const fs = require('fs');

class repoPost {

    constructor() {
        this.posts = require("../posts.json");
    }
    getNewPost() {
        const post = this.posts[0];
        fs.writeFileSync("./src/posts.json", JSON.stringify(this.posts.slice(1), null, 2));
        return post;
    }
    getPostsLeft() {
        return this.posts.length;
    }

}



module.exports = repoPost;