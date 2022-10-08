const db = require("../db")

class Page {
    static async getPage(pageID) {
        return await db.query('SELECT * FROM Pages WHERE ID = ($1)',[1]);
    }
}

module.exports = Page;