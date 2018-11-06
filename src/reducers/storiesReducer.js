export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const receivedError = (state = '', action) => {
  switch(action.type) {
    case 'RECEIVED_ERROR':
      return action.errorMessage
    default:
      return state
  }
}

export const storiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_STORIES':
      return action.stories
    default:
      return state
  }
}