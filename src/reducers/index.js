import { combineReducers } from 'redux'
import { isLoading, caughtError, setStories } from './storiesReducer'

const rootReducer = combineReducers({
  isLoading,
  caughtError,
  stories: setStories,
})

export default rootReducer;