const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const gameSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
gameSchema.plugin(toJSON);
gameSchema.plugin(paginate);

/**
 * @typedef game
 */
const game = mongoose.model('game', gameSchema);

module.exports = game;

// POST request to create the time log game with required fields
// PATCH request to update the created game by providing the previously created gameId and other remaining fields
