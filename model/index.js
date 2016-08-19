var path      = require('path');
var basename  = path.basename(module.filename);
var fs        = require('fs');
var Sequelize = require('sequelize');
var config    = require(__dirname + '/../config');
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);
var models = {};

fs  .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function(file) {
      var model = sequelize['import'](path.join(__dirname,file));
      models[model.name] = model;
    });

Object.keys(models).forEach(function (modelName) {
    if (models[modelName].options.hasOwnProperty('associate')) {
        models[modelName].options.associate(models);
    }
});

models.sequelize = sequelize;
module.exports = models;
