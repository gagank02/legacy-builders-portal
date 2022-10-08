const db = require("../db")

class Course {
    static async getCourse(courseID) {
        return await db.query('SELECT * FROM Courses WHERE ID = ($1)',[1]);
    }
}

module.exports = Course;