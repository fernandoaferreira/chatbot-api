const botsRepositorioMongo = require('../dataBaseMongo/repositorio/botsRepo');

module.exports = {

    listarBots: async (req, res) => {

        try {
            const listaBots = await botsRepositorioMongo.getBots();

            res.status(200).send(listaBots);

        } catch (error) {
            res.status(500).json(error);
        }
    },

    cadastrarBots: async (req, res) => {

        try {
            const dados = req.body;

            const botCadastrado = await botsRepositorioMongo.postBots(dados);

            res.status(200).send(botCadastrado);

        } catch (error) {
            res.status(500).json(error);
        }
    },

    atualizarBots: async (req, res) => {

        try {

            const { id } = req.params;
            const dados = req.body;

            const botAtualizado = await botsRepositorioMongo.putBots(id, dados);

            res.status(200).json({
                msg: 'Bot atualizado com sucesso',
                bot: botAtualizado
            });

        } catch (error) {
            res.status(500).json(error);
        }
    },

    deletarBots: async (req, res) => {

        try {
            const { id } = req.params;

            await botsRepositorioMongo.deleteBots(id);

            res.status(200).send(`bot ${id} deletado com sucesso`);

        } catch (error) {
            res.status(500).json(error);
        }
    }
};