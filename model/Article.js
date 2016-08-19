var moment = require('moment');
var marked = require('marked');

module.exports = function(sequelize, Sequelize) {
  var Article = sequelize.define('article', {
    id: {
      type: Sequelize.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      allowNull: false,
    },
    title:  {
      type: Sequelize.STRING,
      field: 'title',
    },
    content: {
      type: Sequelize.TEXT,
      field: 'content',
    },
  });
  return Article;
};
