const { Schema } = require('mongoose')

const discussionBoard = new Schema(
  {
    name: { type: String, required: true },
    time: { type: Integer, required: true },
    date: { type: Integer, required: true }
  },
  { timestamps: true }
)

module.exports = discussionBoard
