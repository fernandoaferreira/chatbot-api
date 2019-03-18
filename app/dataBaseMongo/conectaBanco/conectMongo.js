const mongo = require('mongoose');
const mLab = require('../mongoLabConnect');

mongo.connect(`mongodb://${mLab.dbuser}:${mLab.dbpassword}${mLab.base}`, { useNewUrlParser: true });

mongo.Promise = global.Promise;
console.log('.. Mongo MLAB - CHAT BOT Conectado');

module.exports = mongo;