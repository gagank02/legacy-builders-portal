const db = require("../db")

class Page {
    static async getPage(body) {
        if (body.hasOwnProperty("pageID") && body.hasOwnProperty("courseID")) {
            return await db.query('SELECT * FROM pages p WHERE p.id = ($1) AND p.course_id = ($2)', body.pageID, body.courseID);
        } else if (body.pageID != null) {
            return await db.query('SELECT * FROM pages WHERE id = ($1)', body.pageID);
        } else if (body.courseID != null) {
            return await db.query('SELECT * FROM pages WHERE course_id = ($1)', body.courseID);
        } else {
            return await db.query('SELECT * FROM pages');
        }    }
}

module.exports = Page;