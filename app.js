var koa = require('koa');
var staticServer = require('koa-static');
var parse = require('co-body');
var _ = require('underscore');
var Promise = require('bluebird');
var path = require('path');
var config = require('./config');
var models = require('./model');
var xtplApp = require('xtpl/lib/koa');
var app = koa();

// xtpl模板引擎对koa的适配
xtplApp(app, {
    views: './view'
});


var co = require('co');
app.use(staticServer(path.join(__dirname, 'public')));
// app.use(function *(){
//   this.body = 'Hello World';
// });
app.use(require('./router').routes());
app.use(require('./router').allowedMethods());
co(function *(){
  try {
      var connection = yield models.sequelize.sync();
      if(connection){
          app.listen(config.port);
          console.log('connected to database and listening on port 3000');
      }
  } catch(e) {
    console.log(e);
  }
});
