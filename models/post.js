const { Schema } = require('mongoose')

const Post = new Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
    ref: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Post
