module.exports = (apiChat) => {

	apiChat.post('/messages', (req, res) => {
		apiChat.app.controllers.messageController.cadastrarMessage(req, res);
	});

	apiChat.get('/messages/:id', (req, res) => {
		apiChat.app.controllers.messageController.findMessageById(req, res);
	});

	apiChat.get('/messages', (req, res) => {
		console.log('rota')
		apiChat.app.controllers.messageController.buscarConversa(req, res);
	});

};