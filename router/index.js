var Article = require('../controller/article');
var Router = require('koa-router');
router = new Router();

router
    .get('/', function *(next) {
        this.body = 'Hello World';
    })
    .get('/article/view/:articleId',Article.view)
    .get('/article/update/:articleId',Article.update)
    .get('/article/create/:articleId',Article.create);
module.exports = router;
