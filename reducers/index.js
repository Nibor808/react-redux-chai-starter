import { combineReducers } from 'redux';
import PeopleReducer from '../reducers/people_reducer';

const rootReducer = combineReducers({
  people: PeopleReducer
});

export default rootReducer;