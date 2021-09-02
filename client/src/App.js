import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import AllPost from './components/AllPost'
import Home from './pages/Home'
import About from './pages/About'

// import Soccer from './components/Soccer'

const App = () => {
  const [posts, setPosts] = useState([])
  const [inputField, setInputField] = useState([{ comment: '' }])
  const [searched, toggleSearched] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [request, changeIt] = useState(false)
  let newPost = {
    text: ``,
    name: ``
  }

  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/allpost" component={AllPost} />
        </Switch>
      </main>
      {/* <div className="button">
        <button> Comment</button>
        <input type="text" />
        <button>Likes</button>
        <input type="number" />
      </div> */}
    </div>
  )
}

export default App
