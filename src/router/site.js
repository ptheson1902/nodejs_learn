const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const searchController = require('../app/controllers/SearchController');

router.get('/about', siteController.about);

router.get('/project', siteController.project);

router.get('/contact', siteController.contact);

router.get('/', siteController.index);

module.exports = router;
