[![Waffle.io - Columns and their card count](https://badge.waffle.io/colehart/allyship.svg?columns=all)](https://waffle.io/colehart/allyship)

# Allyship

## A React app to help you find your way in the galaxy of knowledge and news any true ally must navigate. Stay up to date on headlines and events that affect minority identities without having to ask people what's going on.

![A screen recording of the app](https://github.com/colehart/allyship/blob/master/src/assets/images/screenRecording.gif "App Screen Recording")

## How to Use

### [Use it live on Heroku](https://allyship.herokuapp.com/)
Visit [https://allyship.herokuapp.com/](https://allyship.herokuapp.com/).

### Use locally
#### Retrieve and Save Unique API Key
This app utilizes the [NewsAPI](https://newsapi.org/). You will need a free API key to fetch news and populate cards. [Click here](https://newsapi.org/) to create an account and receive your key.

#### To Save Key
Clone this repo to your local machine.

Create a file in the root directory called `.env`. This file is included in the `.gitignore` and is shielded from any future commits you may make.

Make sure to save your key using the following syntax. The brackets denote dynamic data. You should replace them with your API key.
<pre>
<i>.env</i>

REACT_APP_API_KEY=[yourApiKeyHere]

<i>ex: REACT_APP_API_KEY=aaaa999aa00</i>
</pre>

### Install and Start Server
* `npm install`

* `npm start`

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

I was assigned the target audience of 'Activists' and randomly assigned the [NewsAPI](https://newsapi.org/).

## Wireframes I Made to Guide the Design
Allyship is a single page web app with different cards populating a card container depending on the selected category button.

### Welcome Page
![Welcome Page](https://github.com/colehart/allyship/blob/master/src/assets/images/desktop%E2%80%93%201.png "Welcome Page Wireframe")

### Sample News Page
![Sample News Page](https://github.com/colehart/allyship/blob/master/src/assets/images/desktop-2.png "Sample News Page Wireframe")

### Saved News Page
![Saved News Page](https://github.com/colehart/allyship/blob/master/src/assets/images/desktop%E2%80%93%203.png "Saved News Wireframe")