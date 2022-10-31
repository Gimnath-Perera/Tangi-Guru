const express = require('express');
const auth = require('../../middlewares/auth');
const gameController = require('../../controllers/game.controller');

const router = express.Router();

router.route('/').post(auth('all'), gameController.creategame).get(auth('all'), gameController.getGames);
router.route('/:gameId').patch(auth('all'), gameController.updategame).delete(auth('all'), gameController.deletegame);

module.exports = router;
