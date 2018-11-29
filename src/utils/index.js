export const cleanStories = (rawStories) => {
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

export const checkSaved = (location, stories) => {
  if(location.pathname === '/saved') {
    return stories.filter(story => story.isSaved)
  }
}

export const cleanName = (pathname) => {
  return pathname.charAt(1).toUpperCase() + pathname.slice(2);
}