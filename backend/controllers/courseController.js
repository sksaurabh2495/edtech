const Course = require('../models/Course');

// @route   GET /courses
// @desc    Get all courses
// @access  Public
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /courses/:id
// @desc    Get course by ID
// @access  Public
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Course not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   POST /courses
// @desc    Create a new course
// @access  Private (requires authentication)
exports.createCourse = async (req, res) => {
  try {
    const { title, description, instructor } = req.body;
    const newCourse = new Course({
      title,
      description,
      instructor
    });
    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   PUT /courses/:id
// @desc    Update course by ID
// @access  Private (requires authentication)
exports.updateCourseById = async (req, res) => {
  try {
    const { title, description, instructor } = req.body;
    const courseFields = {};
    if (title) courseFields.title = title;
    if (description) courseFields.description = description;
    if (instructor) courseFields.instructor = instructor;

    let course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    course = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: courseFields },
      { new: true }
    );

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   DELETE /courses/:id
// @desc    Delete course by ID
// @access  Private (requires authentication)
exports.deleteCourseById = async (req, res) => {
  try {
    let course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    await Course.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Course removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
