import React from 'react'

function PostCard({ author, content, channel, comments, likes }) {
  return (
    <div className="card">
      <h3>{author}</h3>
      <p>{content}</p>
      <p>{channel}</p>
      <p>likes: {likes.length}</p>
      {comments.map((comment) => (
          <p key={comment}>{comment}</p>
        ))}
    </div>
  )
}

export default PostCard
