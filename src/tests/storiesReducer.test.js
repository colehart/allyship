import { storiesReducer } from '../reducers/storiesReducer';
import * as Actions from '../actions';
import { mockStories } from './testMocks'

describe('storiesReducer', () => {
  let stories;

  beforeEach(() => {
    stories = mockStories
  })

  it('should return the default state', () => {
    const expected = []
    const result = storiesReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state with state', () => {
    const initialState = []
    const expected = stories;

    const result = storiesReducer(initialState, Actions.setStories(stories))
    expect(result).toEqual(expected);
  })
})