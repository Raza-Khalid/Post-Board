const { Schema } = require('mongoose')

const PostSchema = new Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
    channel: { type: String, required: true },
    likes: [String],
    comments: [String]
  },
  { timestamps: true }
)

module.exports = PostSchema
