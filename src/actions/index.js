export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool,
})

export const receivedError = (errorMessage) => ({
  type: 'RECEIVED_ERROR',
  errorMessage,
})

export const setStories = (stories) => ({
  type: 'SET_STORIES',
  stories,
})