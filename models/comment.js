const { Schema } = require('mongoose')

const CommentSchema = new Schema(
  {
    author: { type: String, required: true },
    comment: { type: String, required: true },
    postId: { type: Schema.Types.ObjectId, required: true }
  },
  { timestamps: true }
)

module.exports = CommentSchema
