# Welcome to the Chat App

The chat app alows you to comunicate with other people, you can also change different settings such as the chat background color, username and send messages on ctrl click, new upcomming features such as language and message time are in progress.

### Setup
This page is built in AngularJS and it uses BEM pattern for the styles. To run the page you should have node installed [Node.js](https://nodejs.org/).
- Run `npm isntall`
- You should install globally [Gulp] and then run `gulp`, or you can just run `./node_modules/.bin/gulp`, this will lift a server and bundle all JS and CSS.
- Then go to `https://localhost:3000`

### Usage
You should open 2 tabs or new pages and go to `https://localhost:3000`. Then you'll be redirected by default to the `/settings` page, you'll be able to change the user's settings, if you don't enter an user name, you won't be able to send messages in the chat. Once you've entered the user name you can chat. Also there's an option to reset all to the default settings.

### Dev. Notes
- This was App tested, in Chrome, Firefox and Safari.
- the object choosen to store data locally is `sessionStorage` to handle each user data in different tabs.

And there you go!