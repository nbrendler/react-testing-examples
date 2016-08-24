import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions';
import nock from 'nock'
import expect from 'expect';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should dispatch action', () => {
    const initialState = {}
    const itemsRequest = { type: 'ITEMS_REQUEST' }

    const store = mockStore(initialState)
    store.dispatch(itemsRequest)

    const actions = store.getActions()

    expect(actions).toEqual([itemsRequest])
  });

  it('dispatches ITEMS_RESPONSE when fetching items completes', () => {
    nock('http://example.com/')
      .get('/items')
      .reply(200, { items: ['classes', 'books'] });

    const expectedActions = [
      { type: 'ITEMS_REQUEST' },
      { type: 'ITEMS_RESPONSE', payload: { items: ['classes', 'books'] } }
    ]

    const store = mockStore({ items: [] })

    return store.dispatch(actions.fetchItems())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

  it('dispatches ITEMS_ERROR when fetching items errors out', () => {
    nock('http://example.com/')
      .get('/items')
      .reply(401);

    const expectedActions = [
      { type: 'ITEMS_REQUEST' },
      { type: 'ITEMS_ERROR', error: 'something went wrong' }
    ]

    const store = mockStore({ items: [] })

    return store.dispatch(actions.fetchItems())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

})
