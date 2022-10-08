const db = require("../db")

class Page {
    static async getPage(pageID, courseID) {
        if (pageID != null && courseID != null) {
            return await db.query('SELECT * FROM pages p WHERE p.id = ($1) AND p.course_id = ($2)', pageID, courseID);
        } else if (pageID != null) {
            return await db.query('SELECT * FROM pages WHERE id = ($1)', pageID);
        } else if (courseID != null) {
            return await db.query('SELECT * FROM pages WHERE course_id = ($1)', courseID);
        } else {
            return await db.query('SELECT * FROM pages');
        }    }
}

module.exports = Page;