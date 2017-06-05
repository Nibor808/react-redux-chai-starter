import { PEOPLE } from '../actions/index';

export default function( state = null, action) {
  switch(action.type) {
    case PEOPLE:
      return { ...state, people: action.payload }
    default:
      return state
  }
}