import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import PostCard from '../components/PostCard'
import AddComment from '../components/AddComment'
import axios from 'axios'

const AllPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    let res = await axios.get(`${BASE_URL}/posts`)
    console.log('getPosts data', res.data)
    setPosts(res.data.posts)
  }
  const deletePost = async (id) => {
    await axios.delete(`${BASE_URL}/posts/${id}`)
    setPosts(posts.filter((post) => post._id !== id))
  }
  const likePost = async (post) => {
    post.likes.push('raza')
    const likes = { likes: post.likes }
    await axios.patch(`${BASE_URL}/posts/${post._id}`, likes)
    getPosts()
  }
  const addComment = async () => {
    let res = await axios.get(`${BASE_URL}/comments`)
    console.log('addComment data', res.data)
    AddComment(res.data.comments)
  }

  console.log('AllPost posts:', posts)
  return (
    <div>
      <h1>Posts</h1>
      <section className="container-grid">
        {posts.map((post) => (
          <div>
            <PostCard
              key={posts._id}
              post={post}
              deletePost={deletePost}
              likePost={likePost}
              addComment={addComment}
            />
          </div>
        ))}
      </section>
    </div>
  )
}

export default AllPost
