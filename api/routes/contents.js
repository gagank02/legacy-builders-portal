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
    const decoded = validateToken(req.body.token);
    // console.log(req.body);
    res.send('hello world')
    // console.log("test");
})

router.post('/courses', async (req, res) => {
    var course = await Courses.getCourse(req.body);
    console.log(course);   
    res.send('hello world');
})

router.post('/quizzes', async (req, res) => {
    var quiz = await Quizzes.getQuiz(req.body);
    console.log(quiz);    
    res.send('hello world');
})

router.post('/usercourses', async (req, res) => {
    var userCourse = await UserCourses.getUserCourse(req.body);
    console.log(userCourse);  
    res.send('hello world');
})

router.post('/pages', async (req, res) => {
    var page = await Pages.getPage(req.body);
    console.log(page);     
    res.send('hello world'); 
})

router.post('/comments', async (req, res) => {
    var comment = await Comments.getComment(req.body);
    console.log(comment);
    res.send('hello world');   
})

router.post('/quizresults', async (req, res) => {
    var quizResult = await QuizResults.getQuizResult(req.body);
    console.log(quizResult);  
    res.send('hello world');
})

module.exports = router;