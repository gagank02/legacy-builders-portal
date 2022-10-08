const db = require("../db")

class Course {
    static async getCourse(courseID, userID) {
        if (courseID != null && userID != null) {
            return await db.query('SELECT * FROM courses c JOIN user_courses uc ON c.id = uc.course_id WHERE uc.course_id = ($1) AND uc.user_id = ($2)', courseID, userID);
        } else if (courseID != null) {
            return await db.query('SELECT * FROM courses WHERE id = ($1)', courseID);
        } else if (userID != null) {
            return await db.query('SELECT * FROM user_courses WHERE user_id = ($1)', userID);
        } else {
            return await db.query('SELECT * FROM courses');
        }
    }

    static async setProgress(userID, progress) {
        return await db.query('UPDATE user_courses SET progress = ($1) WHERE user_id = ($2)', progress, userID);
    }
}

module.exports = Course;