import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/todo'>Todo</Link>
      </nav>
    </div>
  )
}

export default Home
