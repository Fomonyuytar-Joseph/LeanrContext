import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const Home = () => {
  const {username}=useContext(AppContext)
  return (
    <h1>This is Home page for {username}</h1>
  )
}

export default Home