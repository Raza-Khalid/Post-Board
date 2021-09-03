import React from 'react'

function PostCard(props) {
  console.log(props)
  return (
    <div className="card">
      <h3>{props.post.author}</h3>
      <p>{props.post.content}</p>
      <h4>Channel: {props.post.channel}</h4>
      <h4>likes: {props.post.likes.length}</h4>
      <h4>Comments: 2</h4>{' '}
      {props.post.comments.map((comment) => (
        <p key={comment}>{comment}</p>
      ))}
      <button
        style={{
          background: '#00FA9A',
          color: 'black',
          margin: '6px'
        }}
        onClick={() => props.deletePost(props.post._id)}
      >
        delete post
      </button>
    </div>
  )
}

export default PostCard
