import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import Comment from '../components/comments'
import axios from 'axios'

const AllComment = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments()
  }, [])

  const getComments = async () => {
    let res = await axios.get(`${BASE_URL}/comments`)
    console.log('data', res.data)
    setComments(res.data.comments)
  }

  return (
    <div>
      <h1>Comments</h1>
      <section className="container-grid">
        {comments.map((comments) => (
          <Comment key={comments.id} {...comments} />
        ))}
      </section>
    </div>
  )
}

export default AllComment
