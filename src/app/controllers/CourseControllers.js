const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose');

class CourseController {
    index(req, res, next) {
        res.render('course/');
    }

    // [GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((courses) => {
                res.render('course/', {
                    courses: mongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
