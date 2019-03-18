module.exports = (apiChat) => {
	apiChat.get('/', (req, res) => {
		res.send('Bem vindo a API-CHATBOT');
	});
}