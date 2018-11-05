import { isLoading, receivedError, setStories } from '../actions';
import { fetchPhotos } from './fetchPhotos';

export const fetchStories = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if(!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const rawResponse = await response.json()
      const photoUrl = rawResponse.articles.urlToImage
      const stories = await dispatch(fetchPhotos(photoUrl))
      setStories(stories)
    }
    catch (error) {
      dispatch(receivedError(error.message))
    }
  }
}