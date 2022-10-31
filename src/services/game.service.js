const httpStatus = require('http-status');
const { Game } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Game
 * @param {Object} GameBody
 * @returns {Promise<Game>}
 */
const creategame = async (GameBody) => {
  return Game.create(GameBody);
};

/**
 * Query for Games
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryGames = async (filter, options) => {
  const Games = await Game.paginate(filter, options);
  return Games;
};

/**
 * Get Game by id
 * @param {ObjectId} id
 * @returns {Promise<Game>}
 */
const getGameById = async (id) => {
  return Game.findById(id);
};

/**
 * Update Game by id
 * @param {ObjectId} GameId
 * @param {Object} updateBody
 * @returns {Promise<Game>}
 */
const updateGameById = async (GameId, updateBody) => {
  const Game = await getGameById(GameId);
  if (!Game) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Game not found');
  }

  Object.assign(Game, updateBody);
  await Game.save();
  return Game;
};

/**
 * Delete Game by id
 * @param {ObjectId} GameId
 * @returns {Promise<Game>}
 */
const deleteGameById = async (GameId) => {
  const Game = await getGameById(GameId);
  if (!Game) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Game not found');
  }
  await Game.remove();
  return Game;
};

module.exports = {
  creategame,
  queryGames,
  getGameById,
  updateGameById,
  deleteGameById,
};
