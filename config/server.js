const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');

const apiChat = express();

apiChat.use(cors({
	origin: '*',
	exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
	maxAge: 5,
	credentials: true,
	allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
	allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

apiChat.use(bodyParser.json());
apiChat.use(bodyParser.json({ type: 'apiChatlication/vnd.api+json' }));
apiChat.use(bodyParser.urlencoded({extended: true}));

apiChat.use(expressValidator());

consign()
	.include('app/routes')
	.then('app/controllers')
	.then('app/dataBaseMongo/conectaBanco')
	.into(apiChat);

module.exports = apiChat;