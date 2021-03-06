import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../globals'

const AddPost = (props) => {
  function handleSubmit(e) {
    e.preventDefault()
    const newPost = {
      author: e.target.author.value,
      content: e.target.content.value,
      channel: e.target.channel.value
    }
    createPost(newPost)
  }
  async function createPost(post) {
    let res = await axios.post(`${BASE_URL}/posts`, post)
    console.log(res)
  }
  return (
    <div className="AddPost">
      <form onSubmit={handleSubmit}>
        <label>Author</label>
        <input type="text" name="author" />
        <label>Content</label>
        <input type="text" name="content" />
        <label>Channel</label>
        <input type="text" name="channel" />
        <button
          style={{
            background: '#00FA9A',
            color: 'black',
            margin: '6px'
          }}
          type="submit"
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default AddPost
