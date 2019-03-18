const mongoMlab = require('../conectaBanco/conectMongo');

const botSchema = new mongoMlab.Schema({
    name: String
})

const botModel = mongoMlab.model('bots', botSchema);

module.exports = botModel;