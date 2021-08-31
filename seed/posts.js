const db = require('../db')
const { Posts} = require('../models')
const Posts = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const Post = [
    {
      text: '',
      name: ''
    },
    {
      text: '',
      name: ''
    },
    {
      text: '',
      name: ''
    },
    {
      text: '',
      name: ''
    }
  ]

  await Posts.insertMany(Posts)
  console.log('Created Post!')
}
const run = async () => {
  await main()
  db.close()
}

run()
