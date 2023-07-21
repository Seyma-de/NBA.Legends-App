# NBA Legends App

## Description

This project is a simple React application that showcases NBA legends and their basic statistics. The project fetches data from an external data.js file and creates player cards and a header using this data.

The Header.js component creates the header section of the application and provides search functionality.

The CardContainer.js component lists the player cards by taking the data and using the PlayerCard.js component to create each player's card.

The PlayerCard.js component creates each player's card and displays basic statistics.

The data is stored as an array in the data.js file and is used by the application..

## Project Skeleton

```
003-NBA Legends(folder)
|
|----readme.md            # Project description
|
SOLUTION
├── public
│     └── index.html      # Basic HTML file of the application
|
├── src
│    ├── components
│    │       ├── Header.js         # Header component
│    │       ├── CardContainer.js  # Component for listing cards
│    │       └── PlayerCard.js     # Player card component
│    ├── helper
│    │       └── data.js           # File containing player data
│    ├── assets.js
│    │       └── [images]          # Folder containing image files
│    ├── App.js                   # Main application component
│    ├── App.css                  # Application style file
│    ├── index.js                 # JS file where the application is started
│    └── index.css                # Style file of the application
|
├── package.json                 # Project's package dependencies
└── yarn.lock                    # Locked dependencies of Yarn

## Expected Outcome

![Project gifi]/legends.gif



### At the end of the project, the following topics were covered

- HTML

- CSS

- JS

- ReactJS


