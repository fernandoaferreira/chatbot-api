const messageRepositorioMongo = require('../dataBaseMongo/repositorio/messagesRepo');
let uniqid = require('uniqid');
const url = require('url');

module.exports = {
    cadastrarMessage: async (req, res) => {

        try {
            const conversationId = uniqid();
            const timeStamp = new Date().getTime();
            const from = uniqid();
            const to = uniqid();
            const { text } = req.body;

            dadosMessage = {
                conversationId: conversationId,
                timeStamp: timeStamp,
                from: from,
                to: to,
                text: text
            };

            const messageCadastrada = await messageRepositorioMongo.postMessage(dadosMessage);

            res.status(200).send(messageCadastrada);

        } catch (error) {
            res.status(500).json(error);
        }
    },

    findMessageById: async (req, res) => {
        try {
            const { id } = req.params;

            const message = await messageRepositorioMongo.getByIdMessage(id);

            res.status(200).send(message);

        } catch (error) {
            res.status(500).json(error);
        }
    },

    buscarConversa: async (req, res) => {

        try {
            let result = url.parse(req.url, true);

            const { conversationId } = result.query

            const messages = await messageRepositorioMongo.getMessages(conversationId);

            res.status(200).send(messages);

        } catch (error) {
            res.status(500).json(error);
        }
    }
};