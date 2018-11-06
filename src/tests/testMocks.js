export const mockQuery = 'transgender'
export const mockDispatch = jest.fn()
export const mockError = 'Bad API Key'
export const mockApiStories = {
  "status": "ok",
  "totalResults": 4974,
  "articles": [
    {
      "source": {
        "id": "the-new-york-times",
        "name": "The New York Times"
      },
      "author": "CLAIRE CAIN MILLER",
      "title": "What Being Transgender Looks Like, According to Stock Photography",
      "description": "The most used photo of a transgender person from Getty Images’s stock photo library shows the transgender pride symbol — but only part of the person’s face.",
      "url": "https://www.nytimes.com/2018/10/25/upshot/what-being-transgender-looks-like-according-to-stock-photography.html",
      "urlToImage": "https://static01.nyt.com/images/2018/10/23/upshot/oakImage-1540334490988/oakImage-1540334490988-facebookJumbo.jpg",
      "publishedAt": "2018-10-25T16:14:40Z",
      "content": "Transgender people are appearing more often in advertisements and mass media. But when they do, its very often in stock photos that show them standing against a blank wall, or else they are hardly seen at all. The most used stock photos are close-ups of their… [+1039 chars]"
    },
    {
      "source": {
        "id": "mashable",
        "name": "Mashable"
      },
      "author": "Victoria Rodriguez",
      "title": "How to be an ally who stands with transgender people",
      "description": "There are many reasons you should learn how to be an ally to trans people. First, transgender rights are human rights — it's that simple. Trans people regularly encounter discrimination in everyday settings, such as workplaces, schools, and doctor's offices. …",
      "url": "https://mashable.com/article/transgender-rights-how-to-be-an-ally/",
      "urlToImage": "https://i.amz.mshcdn.com/5pzXh7-L0211KSsQEfj9UV4v23o=/1200x630/2018%2F10%2F23%2Fd5%2Febde5e356f604ebeaa4548bdc4c4da6a.9e146.jpg",
      "publishedAt": "2018-10-23T17:09:37Z",
      "content": "There are many reasons you should learn how to be an ally to trans people. First, transgender rights are human rights it's that simple. Trans people regularly encounter discrimination in everyday settings, such as workplaces, schools, and doctor's offices. Th… [+8478 chars]"
    }
  ]
}

export const mockStories = [
  {
    source: "The New York Times",
    author: "CLAIRE CAIN MILLER",
    title: "What Being Transgender Looks Like, According to Stock Photography",
    description: "The most used photo of a transgender person from Getty Images’s stock photo library shows the transgender pride symbol — but only part of the person’s face.",
    url: "https://www.nytimes.com/2018/10/25/upshot/what-being-transgender-looks-like-according-to-stock-photography.html",
    urlToImage: "https://static01.nyt.com/images/2018/10/23/upshot/oakImage-1540334490988/oakImage-1540334490988-facebookJumbo.jpg",
    published: "2018-10-25",
    content: "Transgender people are appearing more often in advertisements and mass media. But when they do, its very often in stock photos that show them standing against a blank wall, or else they are hardly seen at all. The most used stock photos are close-ups of their… [+1039 chars]",
    isSaved: false,
  },
  {
    source: "Mashable",
    author: "Victoria Rodriguez",
    title: "How to be an ally who stands with transgender people",
    description: "There are many reasons you should learn how to be an ally to trans people. First, transgender rights are human rights — it's that simple. Trans people regularly encounter discrimination in everyday settings, such as workplaces, schools, and doctor's offices. …",
    url: "https://mashable.com/article/transgender-rights-how-to-be-an-ally/",
    urlToImage: "https://i.amz.mshcdn.com/5pzXh7-L0211KSsQEfj9UV4v23o=/1200x630/2018%2F10%2F23%2Fd5%2Febde5e356f604ebeaa4548bdc4c4da6a.9e146.jpg",
    published: "2018-10-23",
    content: "There are many reasons you should learn how to be an ally to trans people. First, transgender rights are human rights it's that simple. Trans people regularly encounter discrimination in everyday settings, such as workplaces, schools, and doctor's offices. Th… [+8478 chars]",
    isSaved: false,
  }
]

export const mockSavedStories = [
  {
    source: "The New York Times",
    author: "CLAIRE CAIN MILLER",
    title: "What Being Transgender Looks Like, According to Stock Photography",
    description: "The most used photo of a transgender person from Getty Images’s stock photo library shows the transgender pride symbol — but only part of the person’s face.",
    url: "https://www.nytimes.com/2018/10/25/upshot/what-being-transgender-looks-like-according-to-stock-photography.html",
    urlToImage: "https://static01.nyt.com/images/2018/10/23/upshot/oakImage-1540334490988/oakImage-1540334490988-facebookJumbo.jpg",
    published: "2018-10-25",
    content: "Transgender people are appearing more often in advertisements and mass media. But when they do, its very often in stock photos that show them standing against a blank wall, or else they are hardly seen at all. The most used stock photos are close-ups of their… [+1039 chars]",
    isSaved: false,
  },
  {
    source: "Mashable",
    author: "Victoria Rodriguez",
    title: "How to be an ally who stands with transgender people",
    description: "There are many reasons you should learn how to be an ally to trans people. First, transgender rights are human rights — it's that simple. Trans people regularly encounter discrimination in everyday settings, such as workplaces, schools, and doctor's offices. …",
    url: "https://mashable.com/article/transgender-rights-how-to-be-an-ally/",
    urlToImage: "https://i.amz.mshcdn.com/5pzXh7-L0211KSsQEfj9UV4v23o=/1200x630/2018%2F10%2F23%2Fd5%2Febde5e356f604ebeaa4548bdc4c4da6a.9e146.jpg",
    published: "2018-10-23",
    content: "There are many reasons you should learn how to be an ally to trans people. First, transgender rights are human rights it's that simple. Trans people regularly encounter discrimination in everyday settings, such as workplaces, schools, and doctor's offices. Th… [+8478 chars]",
    isSaved: true,
  }
]

export const mockDefaultState = {
  isLoading: false,
  caughtError: '',
  stories: []
}

export const mockFullState = {
  isLoading: true,
  caughtError: 'Bad API key',
  stories: mockStories
}