const db = require("../db")

class Quiz {
    static async getQuiz(quizID) {
        return await db.query('SELECT * FROM Courses WHERE ID = ($1)',[1]);
    }
}

module.exports = Quiz;