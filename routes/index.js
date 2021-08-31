const { Router } = require('express')
const router = Router()
const controllers = require('./controllers')

// router.get('/', (req, res) => res.send('This is root!'))

router.get('/', controllers.getAllPosts)
router.get('/posts', controllers.getAllPosts)
router.get('/posts/:id', controllers.getPostById)
router.post('/posts', controllers.createPost)
router.delete('/posts/:id', controllers.deletePost)

module.exports = router
