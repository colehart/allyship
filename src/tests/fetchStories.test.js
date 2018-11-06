import { fetchStories } from '../thunks/fetchStories'
import * as Actions from '../actions'
import { mockUrl, mockDispatch, mockApiStories, mockStories } from './testMocks'

describe('fetchStories', () => {
  let thunk;

  beforeEach(() => {
    thunk = fetchStories(mockUrl)
  })

  it('should call dispatch with isLoading(true)', () => {
    thunk(mockDispatch)
    const expectedParams = Actions.isLoading(true)

    expect(mockDispatch).toHaveBeenCalledWith(expectedParams)
  })

  it('should dispatch receivedError(message) if the response is not ok', async () => {
    const message = 'not ok'
    window.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      statusText: message
    }))
    const expectedParams = Actions.receivedError(message)

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
