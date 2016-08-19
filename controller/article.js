var util = require('util');

var marked = require('marked');
var models = require('../model/index')


var models = require('../model/');
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false,
});

exports.view = function *() {
  var articleId = this.params['articleId'];
  var article = yield models.Article.find(articleId);
  console.log(articleId);
}

exports.create = function *() {

}

exports.update = function *() {
	yield this.render('edit',{"title":"xtemplate demo"});
}
