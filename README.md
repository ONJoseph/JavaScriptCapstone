![](https://img.shields.io/badge/Microverse-blueviolet)

# Joseph Ogbole & Aldo Colombo Javascript capstone project

> API-based webapp from Module 2 at Microverse

## Wireframe requirements

### The Home Page low fidelity
![Home.png](./Home.png)

### The low fidelity for comment pop up page
![](./Comments.png)

## Actual screenshot
![Screenshot](./moviezScreenshot.png)

## Video presentation
[Video link](https://drive.google.com/file/d/1D-y1Rhc4E0yFH7o8dmgjGcvOGnMayFCi/view)

## Description
JavaScript Capstone API Based Project using an external API-TVmaze API for displaying and interacting with movie items from the data base. 

## Requirements

### APIs
- First, you need to find an API so you can base the development of the webapp around it. The API should allow you to:
  - Get a list of items with a unique item id (or generate the unique id).
  - For a given item, get detailed information about it.
- You will use our [Involvement API](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270) to record the different user interactions (likes, comments and reservations).

### Interfaces
- You should build these interfaces:
  - The home page.
  - The comments popup.
- You should follow the layout of the wireframes provided. You should personalize the rest of the design including colors, typographies, spacings, etc.
- Home page
  - When the page loads, the webapp retrieves data from:
    - The selected API and shows the list of items on screen.
    - The Involvement API to show the item likes.
  - Remember that your page should make only 2 requests:
    - One to the base API.
    - And one to the Involvement API.
  - When the user clicks on the Like button of an item, the interaction is recorded in the Involvement API and the screen is updated.
  - When the user clicks on the "Comments" button, the Comments popup appears.
  - Home page header and navigation similar to the given mockup.
  - Home page footer similar to the given mockup.
- Comments popup
  - When the popup loads, the webapp retrieves data from:
    - The selected API and shows details about the selected item.
    - The Involvement API to show the item comments.
  - When the user clicks on the "Comment" button, the data is recorded in the Involvement API and the screen is updated.

### Counters
Counters We have counters in all the interfaces that show:
- The number of items (home).
- The number of comments (comments popup).

### Technical set up
- Set up the repository on GitHub and use Gitflow.
- Set up webpack.
- Set up a JavaScript testing library (Jest).

## Instructions:

 ### Cloning the repo to your local system (if you already have git, installed in your system)

 1) Copy this Link `https://github.com/ONJoseph/JavaScriptCapstone.git`
 2) Open your terminal or command line
 3) Run the command: `git clone https://github.com/ONJoseph/JavaScriptCapstone.git`
 4) Open the folder with your code editor: `cd JavaScriptCapstone`
 5) Now You can edit the code and check the changes in the browser using Live Server

## Built With

- Major languages: HTML, CSS, JS
- Frameworks: none
- Technologies used: Git, webpack, Jest

## Live Demo

- [Live demo link]()

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Internet connection and browser
- A text editor (preferably Visual Studio Code)
- Browser

### Setup

- For detail description of how to get started with webpack, please, look at: [webpack](https://webpack.js.org/guides/getting-started/)

### Install

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

### Usage

- Clone the repository using `git clone https://github.com/ONJoseph/JavaScriptCapstone.git`
- Change directory into the project folder: `cd JavaScriptCapstone`
- Run `npm install`
- Run `npm start`
- A new browser will open automatically with application loaded

### Run tests

- Test the number of movies loaded with Jest
- Test the number of comments with Jest

### Deployment

- All the files necessary for deployment are in the /dist folder

## Authors

👤 **Joseph Ogbole**

- GitHub: [@ONJoseph](https://github.com/ONJoseph)
- Twitter: [@ONJCodes](https://twitter.com/ONJCodes)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/o-n-joseph-ba8425147/)

👤 **Aldo Colombo**

- GitHub: [@acolombo1](https://github.com/acolombo1)
- Twitter: [@aldocolombo](https://twitter.com/aldocolombo)
- LinkedIn: [Aldo Colombo](https://www.linkedin.com/in/aldo-colombo-2156009)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ONJoseph/JavaScriptCapstone/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- TV Amaze API to retrieve shows data
  - More information [Here](https://www.tvmaze.com/api)
- Involvement API to store and retireve likes and comments
  - More information [Here](https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270)


## 📝 License

This project is [MIT](./license.md) licensed.
