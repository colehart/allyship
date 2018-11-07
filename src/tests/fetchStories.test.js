import { fetchStories } from '../thunks/fetchStories'
import * as Actions from '../actions'
import { mockQuery, mockDispatch, mockError, mockApiStories, mockStories } from './testMocks'

describe('fetchStories', () => {
  let thunk;

  beforeEach(() => {
    thunk = fetchStories(mockQuery)
  })

  it('should call dispatch with isLoading(true)', () => {
    thunk(mockDispatch)
    const expectedParams = Actions.isLoading(true)

    expect(mockDispatch).toHaveBeenCalledWith(expectedParams)
  })

  it('should dispatch caughtError(message) if the response is not ok', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      statusText: mockError
    }))
    const expectedParams = Actions.caughtError(mockError)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedParams)
    expect(mockDispatch).not.toHaveBeenCalledWith(Actions.isLoading(false))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: true,
    }))
    const expectedParams = Actions.isLoading(false)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedParams)
  })

  it('should dispatch setStories if the response is ok', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        ...mockApiStories
      })
    }))
    const cleanerStories = mockStories
    const expectedParams = Actions.setStories(cleanerStories)

    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(expectedParams)
  })
})
