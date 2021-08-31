const mongoose = require('mongoose')
const PostSchema = require('./post')
const DiscussionBoardSchema = require('./discussionBoard')

const Post = mongoose.model('posts', PostSchema)
const discussionBoard = mongoose.model('discussionBoard', DiscussionBoardSchema)

module.exports = {
  Post,
  discussionBoard
}
