import { people } from '../people';

export const PEOPLE = 'PEOPLE';

export function getPeople() {
  return function(dispatch) {
    dispatch({
      type: PEOPLE,
      payload: people
    });
  }
}