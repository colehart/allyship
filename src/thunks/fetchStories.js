import { isLoading, caughtError, setStories } from '../actions';
import { cleanStories } from '../utils'

export const fetchStories = (query) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const rawStories = await response.json()
      const cleanerStories = cleanStories(rawStories)
      dispatch(setStories(cleanerStories))
    }
    catch (error) {
      dispatch(caughtError(error.message))
    }
  }
}