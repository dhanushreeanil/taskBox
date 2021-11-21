import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'

const App = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  useEffect(()=>{
      if(localStorage.getItem('token')){
          handleAuth()
      }
  },[])

  return (
    <div className="container-fluid">
        <div className="text-center bg-muted">
           <h1> User Authentication </h1>
        </div>
        <NavBar isLoggedIn = { isLoggedIn } handleAuth = { handleAuth } />
    </div>
  )
}

export default App
