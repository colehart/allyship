import { isLoading, caughtError, setStories } from '../reducers/storiesReducer';
import * as Actions from '../actions';
import { mockStories, mockError } from './testMocks'

describe('storiesReducer', () => {
  describe('isLoading', () => {
    it('should return the default state', () => {
      const expected = false
      const result = isLoading(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return the state with isLoading', () => {
      const initialState = false
      const expected = true;

      const result = isLoading(initialState, Actions.isLoading(true))
      expect(result).toEqual(expected);
    })
  })

  describe('caughtError', () => {
    it('should return the default state', () => {
      const expected = ''
      const result = caughtError(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return the state with caught error message', () => {
      const initialState = ''
      const expected = mockError;

      const result = caughtError(initialState, Actions.caughtError(mockError))
      expect(result).toEqual(expected);
    })
  })

  describe('setStories', () => {
    it('should return the default state', () => {
      const expected = []
      const result = setStories(undefined, {})

      expect(result).toEqual(expected)
    })

    it('should return the state with stories', () => {
      const initialState = []
      const expected = mockStories;

      const result = setStories(initialState, Actions.setStories(mockStories))
      expect(result).toEqual(expected);
    })
  })
})