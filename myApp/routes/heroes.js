var express = require('express');
var router = express.Router();
var heroesController = require('../controllers/heroes.js');

/*RUTA HEROES */

router.get('/heroes', heroesController.index);

/* RUTA HEROES/DETALLE */

router.get('/heroes/detalle/:id', heroesController.mostrarDetalle);

/* RUTA HEROES/BIO */

router.get('/heroes/bio/:id/:ok?', heroesController.mostrarBio);

module.exports = router;
