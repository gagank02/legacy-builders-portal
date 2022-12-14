const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class Comment {
    static async makePublicComment(comment) {
        let username = await Comment.getUserName(comment.user_id)
        console.log(username);
        return {
            commentID: comment.id,
            comment: comment.comment,
            pageID: comment.page_id,
            userID: comment.user_id,
            parentCommentID: comment.parent_comment_id,
            username: "username",
        };
    }

    static async getAllCommentOnPage(body) {
        const requiredFields = ["pageID"];

        console.log(body);

        requiredFields.forEach((field) => {
            if (!body.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`);
            }
        });

        let res = await db.query(
            "SELECT page_id, user_id, comment, parent_comment_id, id  FROM Comments WHERE page_id = $1",
            [body.pageID]
        );
        if (res.rows[0] == undefined) {
            throw new BadRequestError(`Comment not found.`);
        }

        const comments = [];

        res.rows.forEach(async (e) => {
            let userValues = await Comment.makePublicComment(e);
            comments.push(userValues);
        });
        return comments;
    }

    static async getComment(body) {
        const requiredFields = ["commentID"];

        requiredFields.forEach((field) => {
            if (!body.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`);
            }
        });

        const { commentID } = body;

        console.log(commentID);

        let res = await db.query(
            "SELECT page_id, user_id, comment, parent_comment_id, id FROM Comments WHERE ID = ($1)",
            [commentID]
        );
        if (res.rows[0] == undefined) {
            throw new BadRequestError(`Comment not found.`);
        }
        return await Comment.makePublicComment(res.rows[0]);
    }

    static async getUserName(userId) {
        let username = await db.query(
            "Select username FROM users WHERE $1 = id;",
            [userId]
        );
        return username.rows[0];
        // console.log(username.rows[0]);
    }

    static async setComment(res, values) {
        const requiredFields = ["page_idValue", "commentValue"];

        requiredFields.forEach((field) => {
            if (!values.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`);
            }
        });

        let comment;

        // if (values.parent_comment_idValue == undefined) {
        comment = await db.query(
            "INSERT INTO comments(page_id, comment, user_id) VALUES ($1, $2, (select id from users where email = $3)) RETURNING page_id, user_id, comment, parent_comment_id, id;",
            [values.page_idValue, values.commentValue, res.locals.user.email]
        );
        // }
        // else {
        //     comment = await db.query(
        //         "INSERT INTO comments(page_id, comment, parent_comment_id, user_id) VALUES ($1, $2, $3, (select id from users where email = $4)) RETURNING page_id, user_id, comment, parent_comment_id, id;",
        //         [
        //             values.page_idValue,
        //             values.commentValue,
        //             1,
        //             res.locals.user.email,
        //         ]
        //     );
        // }

        return await Comment.makePublicComment(comment.rows[0]);
    }
}

module.exports = Comment;
