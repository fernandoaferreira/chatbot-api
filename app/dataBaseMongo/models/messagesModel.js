const mongoMlab = require('../conectaBanco/conectMongo');

const messagesSchema = new mongoMlab.Schema({

    conversationId: String,
    timestamp: String,
    from: String,
    to: String,
    text: String

});

const messagesModel = mongoMlab.model('messages', messagesSchema);

module.exports = messagesModel;