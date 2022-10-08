const express = require("express");
const router = express.Router();
const Courses = require("../models/courses");
const Quizzes = require("../models/quizzes");
// const UserCourses = require('../models/user-courses');
const Pages = require("../models/pages");
const Comments = require("../models/comments");
// const QuizResults = require('../models/quiz-results');
const security = require("./../middleware/security");

router.post("/", async (req, res) => {
    // console.log(req.body);
    res.send("hello world");
    // console.log("test");
});

router.get("/courses", async (req, res) => {
    try {
        req.decoded = validateToken(req.body.token);
        var course = await Courses.getCourse(req.body);
        console.log(course);
        return res.status(200).json({ token, course });
    } catch (error) {
        next(error);
    }
});

router.get("/quizzes", security.requireAuthenticatedUser, async (req, res) => {
    try {
        var quiz = await Quizzes.getQuiz(req.body);
        console.log(quiz);
        return res.status(200).json({ token, quiz });
    } catch (error) {
        next(error);
    }
});

router.get("/pages", security.requireAuthenticatedUser, async (req, res) => {
    var page = await Pages.getPage(req.body);
    console.log(page);
    return res.status(200).json({ token, page });
});

router.post("/comments/commentsonpage", async (req, res, next) => {
    try {
        let comments = await Comments.getAllCommentOnPage(req.body);
        console.log(comments);
        return res.status(201).send(comments);
    } catch (error) {
        next(error);
    }
});

router.post("/comments/get", async (req, res, next) => {
    try {
        let comment = await Comments.getComment(req.body);
        console.log(comment);
        return res.status(201).send(comment);
    } catch (error) {
        next(error);
    }

});

router.post(
    "/comments/set",
    security.requireAuthenticatedUser,
    async (req, res, next) => {
        try {
            var comment = await Comments.setComment(res, req.body);
            console.log(comment.rows);
            return res.status(201).send(comment);
        } catch (error) {
            next(error);
        }
    }
);


router.put('/progress', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    const progress = await Courses .setProgress(req.body);
    console.log(progress);
    return res.status(200).json({token, progress});
});

router.put('/location', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    const location = await Users.setLocation(req.body);
    console.log(progress);
    return res.status(200).json({token, location});
});

router.post('/location', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    const location = await Users.setLocation(req.body);
    console.log(progress);
    return res.status(200).json({token, location});
});

router.post('/quiz-try', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    const quizAttempt = await Quizzes.quizTry(req.body);
    console.log(progress);
    return res.status(200).json({token, quizAttempt});
});

module.exports = router;
