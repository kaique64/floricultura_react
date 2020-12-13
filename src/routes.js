const { Router } = require('express');
const express = require('express');

const routes = express.Router();

const Usuarios = require('./controllers/usuarios.controller');

routes.get('/', Usuarios.index);

routes.post('/api/usuarios', Usuarios.create);
routes.get('/api/usuarios/logar', Usuarios.login);

module.exports = routes;