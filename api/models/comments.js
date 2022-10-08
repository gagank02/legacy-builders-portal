const db = require("../db")

class Comment {
    static async getComment(commentID) {
        return await db.query('SELECT * FROM Comments WHERE ID = ($1)',[1]);
    }
}

module.exports = Comment;