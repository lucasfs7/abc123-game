import * as types from '../actions/types'

export function incrementPoints() {
  return {
    type: types.INCREMENT_POINTS
  }
}

export function resetPoints() {
  return {
    type: types.RESET_POINTS
  }
}

export function generateKey() {
  return {
    type: types.GENERATE_KEY
  }
}

export function changeMessage(message) {
  return {
    type: types.CHANGE_MESSAGE,
    data: message
  }
}
