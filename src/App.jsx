import React from 'react'
import UserSearch from './Components/UserSearch'
import GithubLogo from './assets/github.svg'
import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <div className='title-container'>
        <img src={GithubLogo} alt="github-logo" />
        <h1>DevFinder</h1>
      </div>
      <UserSearch/>

    </div>
  )
}

export default App