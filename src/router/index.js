const newsRouter = require('../router/news');
const siteRouter = require('../router/site');
//const searchRouter = require('../router/search')
function router(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    //app.use('/search', searchRouter)
}

module.exports = router;
