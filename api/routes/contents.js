const express = require('express');
const router = express.Router();
const Courses = require('../models/courses');
const Quizzes = require('../models/quizzes');
const UserCourses = require('../models/user-courses');
const Pages = require('../models/pages');
const Comments = require('../models/comments');
const QuizResults = require('../models/quiz-results');
const { validateToken } = require("../utils/tokens");



router.post('/', async (req, res) => {
    // console.log(req.body);
    res.send('hello world')
    // console.log("test");
})

router.get('/courses', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    var course = await Courses.getCourse(req.body);
    console.log(course);   
    return res.status(200).json({token, course});
})

router.get('/quizzes', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    var quiz = await Quizzes.getQuiz(req.body);
    console.log(quiz);    
    return res.status(200).json({token, quiz});
})

router.post('/usercourses', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    var userCourse = await UserCourses.getUserCourse(req.body);
    console.log(userCourse);  
    res.send('hello world');
})

router.post('/pages', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    var page = await Pages.getPage(req.body);
    console.log(page);     
    res.send('hello world'); 
})

router.post('/comments', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    var comment = await Comments.getComment(req.body);
    console.log(comment);
    res.send('hello world');   
})

router.post('/quizresults', async (req, res) => {
    req.decoded = validateToken(req.body.token);
    var quizResult = await QuizResults.getQuizResult(req.body);
    console.log(quizResult);  
    res.send('hello world');
})

module.exports = contentRoutes;