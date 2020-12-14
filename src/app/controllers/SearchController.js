const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose');

class SearchController {
    // [GET] /search
    index(req, res) {
        res.render('search');
    }

    show(req, res, next) {
        var searchValue = req.body.search;
        var matkhau = req.body.mk;
        console.log(searchValue);
        Course.findOne({ taikhoan: searchValue, password: matkhau })
            .then((courses) => {
                res.render('news', {
                    courses: mongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new SearchController();
