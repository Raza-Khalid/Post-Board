const db = require('../db')
const { Posts } = require('../models')
const Posts = require('../models/post')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const Post = [
    {
      text: 'hello',
      name: 'John'
    },
    {
      text: 'hello',
      name: 'Smith'
    },
    {
      text: 'hello!',
      name: 'Liam'
    },
    {
      text: 'hi!',
      name: 'Francis'
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
