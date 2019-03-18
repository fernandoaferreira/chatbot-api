const botModel = require('../models/botsModel');

module.exports.getBots = async () => {

    try {
        const listaDebots = await botModel.find({});

        return listaDebots;

    } catch (error) {
        return error;
    };
};

module.exports.postBots = async (dados) => {

    try {
        const botCriado = await botModel.create(dados);

        return botCriado;

    } catch (error) {
        return error;
    };
};

module.exports.putBots = async (id, dados) => {

    try {
        await botModel.findOneAndUpdate({ _id: id }, {
            name: dados.name
        });

        const botsAlterado = await botModel.findById({ _id: id });

        return botsAlterado;

    } catch (error) {
        return error;
    };
};

module.exports.deleteBots = async (id) => {

    try {

        await botModel.deleteOne({ _id: id });

    } catch (error) {
        return error;
    };
};