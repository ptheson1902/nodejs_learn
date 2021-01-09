const Projects = require('../models/Course');
const { multipleMongooseToObject } = require('../../ulti/mongoose');
class SiteController {
    // [GET] /home
    index(req, res, next) {
        res.render('home');
    }

    about(req, res, next) {
        res.render('about');
    }

    project(req, res, next) {
        Projects.find({})
            .then((projects) => {
                res.render('project', {
                    projects: multipleMongooseToObject(projects),
                });
            })
            .catch(next);
    }

    contact(req, res, next) {
        res.render('contact');
    }
}

module.exports = new SiteController();
