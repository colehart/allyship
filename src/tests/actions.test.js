import * as Actions from '../actions';
import { mockStories, mockError, mockHeadline } from './testMocks'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = Actions.isLoading(true);
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of CAUGHT_ERROR', () => {
    const expectedAction = {
      type: 'CAUGHT_ERROR',
      errorMessage: mockError,
    }

    const result = Actions.caughtError(mockError)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_STORIES', () => {
    const expectedAction = {
      type: 'SET_STORIES',
      stories: mockStories
    }
    const result = Actions.setStories(mockStories)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of TOGGLE_SAVED', () => {
    const headline = mockHeadline;
    const expectedAction = {
      type: 'TOGGLE_SAVED',
      headline: mockHeadline
    }
    const result = Actions.toggleSaved(headline)
    expect(result).toEqual(expectedAction)
  })
})