const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/courseController');
const passport = require('passport');

// @route   GET /courses
// @desc    Get all courses
// @access  Public
router.get('/', CourseController.getAllCourses);

// @route   GET /courses/:id
// @desc    Get course by ID
// @access  Public
router.get('/:id', CourseController.getCourseById);

// @route   POST /courses
// @desc    Create a new course
// @access  Private (requires authentication)
router.post('/', passport.authenticate('jwt', { session: false }), CourseController.createCourse);

// @route   PUT /courses/:id
// @desc    Update course by ID
// @access  Private (requires authentication)
router.put('/:id', passport.authenticate('jwt', { session: false }), CourseController.updateCourseById);

// @route   DELETE /courses/:id
// @desc    Delete course by ID
// @access  Private (requires authentication)
router.delete('/:id', passport.authenticate('jwt', { session: false }), CourseController.deleteCourseById);

module.exports = router;
