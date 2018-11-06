import { isLoading, caughtError, setStories } from '../actions';

export const fetchStories = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
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
      published: article.publishedAt.slice(0, 10)
    }
  })
}