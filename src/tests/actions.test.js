import * as Actions from '../actions';
import { mockStories } from './testMocks'

describe('actions', () => {
  it('should have a type of IS_LOADING', () => {
    const expectedAction = {
      type: 'IS_LOADING',
      isLoading: true
    }

    const result = Actions.isLoading(true);
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of RECEIVED_ERROR', () => {
    const mockErrorMessage = 'Your API key has been disabled.'
    const expectedAction = {
      type: 'RECEIVED_ERROR',
      receivedError: mockErrorMessage,
    }

    const result = Actions.receivedError(mockErrorMessage)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of RECEIVED_ERROR', () => {
    const stories = mockStories;

  })
})