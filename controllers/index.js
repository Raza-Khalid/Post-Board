const { Post } = require('../models')
const { Comment } = require('../models')

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (post) {
      return res.status(200).json({ post })
    }
    return res.status(404).send('No Post')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const updated = await Post.findByIdAndUpdate(id, body)
    if (updated) {
      return res.status(200).send('Post has been Updated')
    }
    throw new Error('No Post')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePost = async (req, res) => {
  console.log(req.params)
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post has been deleted')
    }
    throw new Error('No Post')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//////COMMENTS//////////COMMENTS////////COMMENTS////////////COMMENTS////////////
//////COMMENTS//////////COMMENTS////////COMMENTS////////////COMMENTS////////////
//////COMMENTS//////////COMMENTS////////COMMENTS////////////COMMENTS////////////

const createComment = async (req, res) => {
  try {
    const newComment = await new Comment(req.body)
    await newComment.save()
    return res.status(201).json({
      newComment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comments = await Comment.findById(id)
    if (comments) {
      return res.status(200).json({ comments })
    }
    return res.status(404).send('No Comment')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const updated = await Comment.findByIdAndUpdate(id, body)
    if (updated) {
      return res.status(200).send('Comment has been Updated')
    }
    throw new Error('No Comment')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment has been deleted')
    }
    throw new Error('No Comment')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPost,
  getPostById,
  getAllPosts,
  deletePost,
  updatePost,
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
}
