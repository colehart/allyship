export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const caughtError = (state = '', action) => {
  switch(action.type) {
    case 'CAUGHT_ERROR':
      return action.errorMessage
    default:
      return state
  }
}

export const setStories = (state = [], action) => {
  switch(action.type) {
    case 'SET_STORIES':
      return action.stories
    case 'TOGGLE_SAVED':
      return state.map(story => {
        if(story.title === action.headline) {
          return { ...story, isSaved: !story.isSaved }
        } else {
          return story
        }
      })
    default:
      return state
  }
}