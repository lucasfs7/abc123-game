import React, { Component } from 'react'
import ALLOWED_KEYS from './lib/keys'
import './App.css'

class App extends Component {
  state = {
    currentKey: this.getAnyKey(),
    message: ''
  }

  getAnyKey() {
    let i = Math.floor(Math.random() * ALLOWED_KEYS.length)
    return ALLOWED_KEYS[i]
  }

  checkKey(e) {
    let pressedKey = e.key.toUpperCase()
    if (pressedKey === this.state.currentKey) {
      this.setState({
        currentKey: this.getAnyKey(),
        message: 'ACERTOU!'
      })
    } else {
      this.setState({
        message: 'ERROU!'
      })
    }
  }

  componentDidMount() {
    this.refs.App.focus()
  }

  render() {
    return (
      <div ref="App" className="App" onKeyPress={this.checkKey.bind(this)} tabIndex="0">
        <h1>{this.state.currentKey}</h1>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App
