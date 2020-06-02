import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

const App = () => {
  const [moves, setMoves] = useState('')
  const [result, setResult] = useState('')

  const handleClick = () => {
    const list = moves.split(' ').join('').split(',')
    console.log(list)

    fetch('http://localhost:4000/moves', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ moves: list }),
    })
      .then(function (response) {
        if (response.status !== 200) {
          setResult(
            'Looks like there was a problem. Status Code: ' + response.status,
          )
          return
        }
        response.text().then(function (data) {
          setResult(data)
        })
      })
      .catch(function (err) {
        console.log('Fetch Error', err)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-container">
        <label>
          Game moves :
          <input
            name="name"
            type="text"
            value={moves}
            onChange={(e) => setMoves(e.target.value)}
          />
        </label>
        <button onClick={handleClick}>Send</button>
      </div>
      <h3 className="App-response">{result}</h3>
    </div>
  )
}

export default App
