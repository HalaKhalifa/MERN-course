const express = require('express');
const pokeController = require('../controllers/pokeController');

const router = express.Router();
router.get('/', pokeController.poke_index);

module.exports = router;