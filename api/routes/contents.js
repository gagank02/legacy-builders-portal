const express = require('express');
const router = express.Router();
const Courses = require('../models/courses');
const Quizzes = require('../models/quizzes');
const Pages = require('../models/pages');
const Comments = require('../models/comments');
const Users = require('../models/users');
const { validateToken } = require("../utils/tokens");



router.post('/', async (req, res) => {
    // console.log(req.body);
    res.send('hello world')
    // console.log("test");
});

router.get('/courses', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    const course = await Courses.getCourse(req.body);
    console.log(course);   
    return res.status(200).json({token, course});
});

router.get('/quizzes', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    const quiz = await Quizzes.getQuiz(req.body);
    console.log(quiz);    
    return res.status(200).json({token, quiz});
});

router.get('/pages', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    const page = await Pages.getPage(req.body);
    console.log(page);     
    return res.status(200).json({token, page});
});

router.get('/comments', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    const comment = await Comments.getComment(req.body);
    console.log(comment);
    return res.status(200).json({token, comment});
});


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
