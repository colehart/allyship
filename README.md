[![Waffle.io - Columns and their card count](https://badge.waffle.io/colehart/allyship.svg?columns=all)](https://waffle.io/colehart/allyship)

# Allyship

## A React app to help you find your way in the galaxy of knowledge and news any true ally must navigate.

## How to Use

### Retrieve and Save Unique API Key
#### Retrieve Key
This app utilizes the [NewsAPI](https://newsapi.org/). You will need a free API key to fetch news and populate cards. Click [here](https://newsapi.org/) to create an account and receive your key.

#### Save Key
Create a file in the `src/` directory called `apiKey.js`. This file is included in the `.gitignore` and is shielded from any future commits you may make.

#### Export Key
Make sure to export your key using the following syntax. The brackets denote dynamic data. You should replace them with the string of your API key.
<pre>
<i>src/apiKey.js</i>

const apiKey = ['yourApiKeyHere']
<i>ex: const apiKey = 'aaaa999aa00'</i>

export default apiKey;
</pre>

### Install and Start Server
* Clone this repo.

* `npm install`

* `npm start`

## See it live
![A screen recording of the app](./src/assets/images/screenRecording.mov "App Screen Recording")

## Technologies Used
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Other technologies used:
- React
- React Router
- Redux

Tested with:
- Jest
- Enzyme

## Project Requirements
Project spec can be found [here](http://frontend.turing.io/projects/binary-challenge.html).

> Target audience assigned: Activists
>
> Random API: [NewsAPI.org](https://newsapi.org/)

## Wireframe
Allyship is a single page web app with different cards populating a card container depending on the selected category button.

### Welcome Page
![Welcome Page](./src/assets/images/desktop-1.png "Welcome Page Wireframe")

### Sample News Page
![Sample News Page](./src/assets/images/desktop-2.jpg "Sample News Page Wireframe")

### Saved News Page
![Saved News Page](./src/assets/images/desktop-3.jpg "Saved News Wireframe")