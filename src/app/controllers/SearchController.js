class SearchController {
    // [POST] /home
    index(req, res) {
        res.send('Search POST!!');
    }
}

module.exports = new SearchController();
