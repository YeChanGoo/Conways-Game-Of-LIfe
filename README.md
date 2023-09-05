# Conway's Game of Life

Welcome to the Game of Life React implementation! This project showcases the classic cellular automaton game where you can observe mesmerizing patterns emerge on a grid of cells. The Game of Life is a simple yet fascinating concept that allows you to explore the dynamics of living and evolving systems.

## Table of Contents

- [About The Game](#about-the-game)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies](#technologies)
- [Contributing](#contributing)

## About the Game

The Game of Life is played on a grid of cells, each of which can be alive or dead. The game progresses through generations, with each generation determined by specific rules. These rules dictate how cells live, die, or multiply, leading to the emergence of complex patterns.

For a more in-depth understanding, you can read about the Game of Life on [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## Features

- Interactive Grid: Play the game on a grid of cells, toggling their state between alive and dead using your mouse.
- Automatic Generation Progression: Watch as the game advances through generations automatically, following the rules of the Game of Life.
- Start/Stop Button: Take control with a pause/play button that lets you pause and resume the game at your own pace.
- Clear Board Button: Reset the grid to its initial state whenever you want.
- Randomize Button: Add an element of randomness by generating a random configuration of cells on the grid.
- Increase/Decrease Speed Buttons: Adjust the speed of generation progression to observe the patterns at your preferred pace.

## Getting Started

1. Clone the repository:

```sh
git clone https://github.com/YeChanGoo/Conways-Game-Of-Life
```

2. Navigate to the project directory:

```sh
cd Conways-Game-Of-Life
```

3. Install dependencies:

```sh
npm install
```

4. Run the app:

```sh
npm run dev
```

## Usage

Access the application in your web browser at http://localhost:5173.

To play the Game of Life:

- Click on the cells in the grid to toggle their state between alive and dead.
- Use the "Start/Stop" button to pause and resume the automatic generation progression.
- Use the "Clear Board" button to reset the grid to its initial state.
- Click the "Randomize" button to generate a random configuration of cells on the grid.
- Adjust the speed of generation progression using the "Increase Speed" and "Decrease Speed" buttons.

## Testing

To ensure the correctness and functionality of the Game of Life implementation, test cases have been included to cover various aspects of the application. Follow these steps to run the tests:

1. Navigate to the project directory:

```sh
cd Conways-Game-Of-Life
```

2. Run the test:

```sh
npm test
```

## Technologies

Client:

- React: Front-end library for building user interfaces.
- CSS: Styles for the user interface.

Tools:

- Vite: Fast development build tool.
- TypeScript: Programming language for type-safe development.
- Jest: Testing framework for unit and integration testing.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature/bugfix.
Make your changes and commit them.
Push your changes to your forked repository.
Create a pull request to the main branch of the original repository.
