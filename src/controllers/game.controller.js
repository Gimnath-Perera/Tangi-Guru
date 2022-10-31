const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { gameService } = require('../services');

const creategame = catchAsync(async (req, res) => {
  const game = await gameService.creategame(req.body);

  res.status(httpStatus.CREATED).send(game);
});

const getGames = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', , 'status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await gameService.queryGames(filter, options);
  res.send(result);
});

const updategame = catchAsync(async (req, res) => {
  const game = await gameService.updategameById(req.params.gameId, req.body);

  res.send(game);
});

const deletegame = catchAsync(async (req, res) => {
  await gameService.deletegameById(req.params.gameId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  creategame,
  getGames,
  updategame,
  deletegame,
};
