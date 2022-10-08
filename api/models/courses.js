const db = require("../db")

class Course {
    static async getCourse(body) {
        if (body.hasOwnProperty("courseID") && body.hasOwnProperty("userID")) {
            return await db.query('SELECT * FROM courses c JOIN user_courses uc ON c.id = uc.course_id WHERE uc.course_id = ($1) AND uc.user_id = ($2)', body.courseID, body.userID);
        } else if (courseID != null) {
            return await db.query('SELECT * FROM courses WHERE id = ($1)', body.courseID);
        } else if (userID != null) {
            return await db.query('SELECT * FROM user_courses WHERE user_id = ($1)', body.userID);
        } else {
            return await db.query('SELECT * FROM courses');
        }
    }
    
    static async setProgress(body) {
        const requiredFields = ["userID", "progress"];

        console.log(body);

        requiredFields.forEach((field) => {
            if (!body.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`);
            }
        });

        return await db.query('UPDATE user_courses SET progress = ($1) WHERE user_id = ($2) RETURNING id, user_id, course_id, progress', body.progress, body.userID);
    }
}

module.exports = Course;