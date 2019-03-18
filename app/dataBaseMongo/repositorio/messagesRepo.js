const messageModel = require('../models/messagesModel');

module.exports.postMessage = async (dados) => {

    try {
        const messageCriada = await messageModel.create(dados)

        return messageCriada;

    } catch (error) {
        return error;
    };
};

module.exports.getByIdMessage = async (id) => {

    try {
        const message = await messageModel.findById({ _id: id});

        return message;

    } catch (error) {
        return error;
    };
};

module.exports.getMessages = async (conversationId) => {

    try {
        const messages = await messageModel.findOneAndUpdate({ conversationId: conversationId});

        return messages;

    } catch (error) {
        return error;
    };
};