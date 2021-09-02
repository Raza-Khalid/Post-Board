import React from 'react'

const AddPost = (props) => {
  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target.author.value)
    console.log(e.target.content.value)
    console.log(e.target.channel.value)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Author</label>
        <input type="text" name="author" />
        <label>Content</label>
        <input type="text" name="content" />
        <label>Channel</label>
        <input type="text" name="channel" />
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default AddPost
