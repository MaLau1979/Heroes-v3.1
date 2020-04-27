var express = require('express');
var router = express.Router();
var mainController = require('../controllers/main.js');

/* RUTA MAIN */

router.get('/', mainController.main);

/* RUTA CREDITOS */

router.get('/creditos', mainController.mostrarCreditos);

/* RUTA ERROR */

router.get('*', mainController.mostrarError );

module.exports = router;