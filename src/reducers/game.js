import * as types from '../actions/types'
import { generateKey } from '../lib/keys'

const initialState = {
  points: 0,
  currentKey: generateKey(),
  message: ''
}

function game(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_POINTS:
      return {
        ...state,
        points: state.points + 1
      }
    case types.RESET_POINTS:
      return {
        ...state,
        points: initialState.points
      }
    case types.GENERATE_KEY:
      return {
        ...state,
        currentKey: generateKey()
      }
    case types.CHANGE_MESSAGE:
      return {
        ...state,
        message: action.data
      }
    default:
      return state
  }
}

export default game
