const Course = require('../models/Course');
const { multipleMongooserToObject } = require('../../ulti/mongoose');
class SiteController {
    // [GET] /home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooserToObject(courses),
                });
            })
            .catch(next);
    }

    /* // [GET] /search
    search(req, res) {
        res.render('search');
    }*/
}

module.exports = new SiteController();
