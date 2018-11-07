export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool,
})

export const caughtError = (errorMessage) => ({
  type: 'CAUGHT_ERROR',
  errorMessage,
})

export const setStories = (stories) => ({
  type: 'SET_STORIES',
  stories,
})

export const toggleSaved = (headline) => ({
  type: 'TOGGLE_SAVED',
  headline,
})