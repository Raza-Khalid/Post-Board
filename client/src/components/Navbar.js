import React, { useState } from 'react'

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
        <h2>Post Board</h2>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/allpost">All Posts</a>
        <a href="/allpost">Delete Post</a>
      </div>
    </nav>
  )
}

export default Navbar
