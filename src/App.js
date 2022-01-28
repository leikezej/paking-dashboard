import React from 'react'
import logo from './logo.svg'

const App = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'roboto'
    }}>

        <img src={logo} alt="Paking Logo" height="30%" />
      
      <h1 style={{
        color: '#6ec177',
        margin: '0'
      }}>Coming Soon</h1>
      <p>PakingAllIn Dashboard</p>
    </div>
  )
}

export default App
