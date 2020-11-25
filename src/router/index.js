const newsRouter = require('../router/news');
const siteRouter = require('../router/site');
const courseRouter = require('../router/course');
//const searchRouter = require('../router/search')
function router(app) {
    app.use('/course', courseRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    //app.use('/search', searchRouter)
}

module.exports = router;
