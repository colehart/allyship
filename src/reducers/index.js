import { combineReducers } from 'redux'
import { isLoading, receivedError, setStories } from './storiesReducer'

const rootReducer = combineReducers({
  isLoading,
  errorMessage: receivedError,
  stories: setStories,
})

export default rootReducer;