module.exports = (apiChat) => {

	apiChat.get('/bots', (req, res) => {
		apiChat.app.controllers.botsController.listarBots(req, res);
    });
    
	apiChat.post('/bots', (req, res) => {
		apiChat.app.controllers.botsController.cadastrarBots(req, res);
    });
    
	apiChat.put('/bots/:id', (req, res) => {
		apiChat.app.controllers.botsController.atualizarBots(req, res);
    });
    
	apiChat.delete('/bots/:id', (req, res) => {
		apiChat.app.controllers.botsController.deletarBots(req, res);
    });
    
};