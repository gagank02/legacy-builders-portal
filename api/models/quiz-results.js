const db = require("../db")

class QuizResult {
    static async getQuizResult(commentID) {
        return await db.query('SELECT * FROM quiz_results WHERE ID = ($1)',[1]);
    }
}

module.exports = QuizResult;