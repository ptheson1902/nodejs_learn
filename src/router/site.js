const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const searchController = require('../app/controllers/SearchController');

router.get('/search', searchController.index);

router.post('/search', searchController.show);

router.get('/', siteController.index);

module.exports = router;
