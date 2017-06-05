import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { getPeople, PEOPLE } from '../../actions';
import { expect } from 'chai';

const middlewares = [ reduxThunk ];
const mockStore = configureMockStore(middlewares);

describe('people', () => {

  let store, actions, len;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch(getPeople());
    actions = store.getActions();
  });

  it('gets the people array with proper type', () => {
    expect(actions[0].type).to.equal(PEOPLE);
    expect(actions[0].payload).to.be.a('array');
  });

  it('each element in the array has "name" property that is not empty', () => {
    actions[0].payload.map((item) => {
      expect(item).to.have.property('name').with.length > 0;
    })
  })
});