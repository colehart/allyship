export const updateLocalStorage = (story) => {
  const savedStories = JSON.parse(localStorage.getItem('savedStories'))

  if (!savedStories) {
    localStorage.setItem('savedStories', JSON.stringify([story]))

  } else {
    updateSavedStories(savedStories, story)
  }
}

const updateSavedStories = (savedStories, story) => {
  const storedStory = savedStories.find(saved => saved.headline === story.headline)

  if (storedStory) {
    const sameOldStories = savedStories.filter(saved => !saved.headline === story.headline)
    localStorage.setItem('savedStories', JSON.stringify(sameOldStories))

  } else {
    localStorage.setItem('savedStories', JSON.stringify([...savedStories, story]))
  }
}