const db = require("../db")

class Quiz {
    static async getQuiz(quizID, userID) {
        if (quizID != null && userID != null) {
            return await db.query('SELECT * FROM quizzes q JOIN quiz_results qr ON q.id = qr.quiz_id WHERE qr.quiz_id = ($1) AND qr.user_id = ($2)', quizID, userID);
        } else if (quizID != null) {
            return await db.query('SELECT * FROM quizzes WHERE id = ($1)', quizID);
        } else if (userID != null) {
            return await db.query('SELECT * FROM quiz_results WHERE user_id = ($1)', userID);
        } else {
            return await db.query('SELECT * FROM quizzes');
        }
    }

    static async quizTry(quizID, userCourseID, score) {
        const previousQuizattempts = await db.query('SELECT * FROM quiz_results WHERE user_id = ($1)', userID);
        const numberOfAttempts = previousQuizattempts.rowCount;
        const dbRes = await db.query(
            "INSERT INTO quiz_results(quiz_id, user_courses_id, quiz_score) VALUES ($1, $2, $3) RETURNING username, first_name, last_name, email, created_at, location;",
            [
                quizID,
                userCourseID,
                score
            ]
        );
    }
}

module.exports = Quiz;