const db = require("../db")

class Comment {
    static async getComment(commentID) {
        return await db.query('SELECT * FROM Comments WHERE ID = ($1)',[commentID]);
    }

    static async setComment({page_idValue, user_idValue, commentValue, parent_comment_idValue}) {
        if (parent_comment_idValue == null) {
            return await db.query("INSERT INTO comments(page_id, user_id, comment) VALUES ($1, $2, $3) RETURNING page_id, user_id, comment, parent_comment_id, id;",[page_idValue, user_idValue, commentValue]);
        }
        else {
            return await db.query("INSERT INTO comments(page_id, user_id, comment, parent_comment_id) VALUES ($1, $2, $3, $4) RETURNING page_id, user_id, comment, parent_comment_id, id;",[page_idValue, user_idValue, commentValue, parent_comment_idValue]);
        }
    }
}

module.exports = Comment;