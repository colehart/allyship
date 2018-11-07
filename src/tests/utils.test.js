import { updateLocalStorage } from '../utils';
import { mockSavedStories } from './testMocks'

describe('utils', () => {
  let newSavedStory;
  let newUnsavedStory;

  beforeEach(() => {
    localStorage.clear()
    newSavedStory = mockSavedStories[1]
    newUnsavedStory = mockSavedStories[0]
  })

  it('should set local storage if no prior entries', () => {
    let itemsInStorage = JSON.parse(localStorage.getItem('savedStories'))

    expect(itemsInStorage).toEqual(null)

    updateLocalStorage(newSavedStory)

    itemsInStorage = JSON.parse(localStorage.getItem('savedStories')).length

    expect(itemsInStorage).toEqual(1)
  })

  it('should add new story if localStorage already populated', () => {
    localStorage.setItem('savedStories', JSON.stringify([newUnsavedStory]))
    updateLocalStorage(newSavedStory)

    expect().toHaveBeenCalled();
  })
})