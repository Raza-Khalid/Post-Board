const { Schema } = require('mongoose')

const PostSchema = new Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
    channel: { type: String, required: true },
    likes: [String],
    comments: [] //{ type: Schema.Types.ObjectId, ref: 'comments_id' }
  },
  { timestamps: true }
)

module.exports = PostSchema
