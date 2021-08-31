const db = require('../db')
const {discussionBoard} = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const discussionBoard = [
    {
      name: 'Sports',
      time: '1:00 PM',
      date: '08/27/2021'
    },
    {
      name: 'Movies',
      time: '2:00 PM',
      date: '08/28/2021'
    },
    {
      name: 'Technology',
      time: '3:00 PM',
      date: '08/29/2021'
    },
    {
      name: 'Covid-19 Updates',
      time: '4:00 PM',
      date: '08/30/2021'
    }
  ]

  await discussionBoard.insertMany(discussionBoard)
  console.log('Created discussionBoard!')
}
const run = async () => {
  await main()
  db.close()
}

run()
