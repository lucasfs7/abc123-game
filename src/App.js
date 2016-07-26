import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import * as gameActions from './actions/game'

class App extends Component {
  win() {
    this.props.dispatch(gameActions.incrementPoints())
    this.props.dispatch(gameActions.generateKey())
    this.props.dispatch(gameActions.changeMessage('WIN!'))
    this.clearMessage()
  }

  loose() {
    this.props.dispatch(gameActions.resetPoints())
    this.props.dispatch(gameActions.changeMessage('LOOSE!'))
    this.clearMessage()
  }

  clearMessage() {
    setTimeout(() => {
      this.props.dispatch(gameActions.changeMessage(''))
    }, 2000)
  }

  checkKey(e) {
    let pressedKey = e.key.toUpperCase()
    if (pressedKey === this.props.game.currentKey) {
      this.win()
    } else {
      this.loose()
    }
  }

  handleDisableClick(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  componentDidMount() {
    this.refs.App.focus()
  }

  render() {
    const { game } = this.props

    return (
      <div
        ref="App"
        className="App"
        onKeyPress={this.checkKey.bind(this)}
        tabIndex="0"
        onClick={this.handleDisableClick}
        onContextMenu={this.handleDisableClick}
      >
        <p className="points">Points: {game.points}</p>
        <h1 className="key">{game.currentKey}</h1>
        <p className="message">{game.message}</p>
      </div>
    )
  }
}

export default connect(state => state)(App)
