import React from 'react'
import ChangeProfile from '../components/ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../App'

const Menu = () => {
  const {username}= useContext(AppContext)
  return (
    <div>
    <h1>This is The Profile for {username}</h1>
    <ChangeProfile/>
    </div>
    
  )
}

export default Menu