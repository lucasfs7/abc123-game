import React, { Component } from 'react'
import { connect } from 'react-redux'
import cx from 'classname'
import './App.css'

import * as gameActions from './actions/game'

class App extends Component {
  win() {
    this.props.dispatch(gameActions.incrementPoints())
    this.props.dispatch(gameActions.changeMessage({
      type: 'success',
      text: 'WIN!',
      show: true
    }))
    setTimeout(() => {
      this.props.dispatch(gameActions.changeMessage({ show: false }))
      this.props.dispatch(gameActions.generateKey())
    }, 2000)
  }

  loose() {
    this.props.dispatch(gameActions.resetPoints())
    this.props.dispatch(gameActions.changeMessage({
      type: 'error',
      text: 'LOOSE!',
      show: true
    }))
    setTimeout(() => {
      this.props.dispatch(gameActions.changeMessage({ show: false }))
    }, 1000)
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
        {game.message.show ?
          <p className={cx(['message', game.message.type])}>{game.message.text}</p>
        : '' }
      </div>
    )
  }
}

export default connect(state => state)(App)
