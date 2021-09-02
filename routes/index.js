const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
console.log(controllers)

router.get('/posts', controllers.getAllPosts)
router.get('/posts/:id', controllers.getPostById)
router.post('/posts', controllers.createPost)
router.delete('/posts/:id', controllers.deletePost)
router.patch('/posts/:id', controllers.updatePost)

router.post('/comments', controllers.createComment)
router.get('/comments', controllers.getAllComments)
router.get('/comments/:id', controllers.getCommentById)
router.delete('/comments/:id', controllers.deleteComment)
router.patch('/comments/:id', controllers.updateComment)

module.exports = router
