import { isLoading, caughtError, setStories } from '../actions';
import apiKey from '../apiKey';

export const fetchStories = (query) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`
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

const cleanStories = (rawStories) => {
  return rawStories.articles.map(article => {
    const { author, title, description, url, urlToImage, content } = article
    return {
      source: article.source.name,
      author,
      title,
      description,
      url,
      urlToImage,
      content,
      published: article.publishedAt.slice(0, 10),
      isSaved: false,
    }
  })
}