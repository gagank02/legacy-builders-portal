const db = require("../db")

class UserCourse {
    static async getUserCourse(userCourseID) {
        return await db.query('SELECT * FROM user_courses WHERE ID = ($1)',[1]);
    }
}

module.exports = UserCourse;