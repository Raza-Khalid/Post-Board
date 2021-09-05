import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../globals'

const AddComment = (props) => {
  function handleChange(e) {
    e.preventDefault()
    const newComment = {
      author: e.target.author.value,
      content: e.target.content.value
    }
    createComment(newComment)
  }
  async function createComment(comment) {
    let res = await axios.post(`${BASE_URL}/comments`, comment)
    console.log(res)
  }
  return (
    <div className="AddComment">
      <form onSubmit={handleChange}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Content</label>
        <input type="text" name="content" />
        <button
          style={{
            background: '#00FA9A',
            color: 'black',
            margin: '6px'
          }}
          type="submit"
        >
          Comment
        </button>
      </form>
    </div>
  )
}

export default AddComment
