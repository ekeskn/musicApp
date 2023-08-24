# Music App

The Music App is a simple React Native application that displays a list of songs along with search and filtering functionality. This README provides an overview of the project structure and how to run the application.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Project Structure

The project is structured as follows:

- `App.js`: The main entry point of the React Native application.
- `src/music-data.json`: JSON file containing a list of songs.
- `src/Components/SongCard.js`: Component for rendering individual song cards.
- `src/Components/SearchBar.js`: Component for providing search functionality.

## Getting Started

### Installation

1. Clone this repository to your local machine:

        git clone https://github.com/yourusername/music-app.git

Navigate to the project directory:

    cd music-app

Install the required dependencies:

    npm install

Running the Application

To start the application, follow the instructions for running a React Native app on your target platform (Android or iOS).

For example, to run the app on an Android emulator:

    npx react-native run-android

Usage

The app displays a list of songs fetched from the music_data.json file. It provides the following features:

  - Search Bar: Allows you to search for songs by title. Enter a search query to filter the displayed songs based on the title.
  - Show Sold Out: Toggle switch that filters the list to show only available songs (isSoldOut: false) or all songs (isSoldOut: true and isSoldOut: false).
  - Song Cards: Each song is displayed as a card, containing relevant information.

License

This project is licensed under the MIT License.

![Screenshot_1687045564](https://github.com/ekeskn/musicApp/assets/96025028/094b7c42-c0c8-4769-8217-d7d6afc29015)

![Screenshot_1687045568](https://github.com/ekeskn/musicApp/assets/96025028/48adb560-d65a-445c-9824-e9075bbba8e0)

![Screenshot_1687045634](https://github.com/ekeskn/musicApp/assets/96025028/a7cbbf4c-df8b-4b77-9fbf-1741399bb98f)
