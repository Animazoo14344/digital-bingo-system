
Built by https://www.blackbox.ai

---

# Digital Bingo System

## Project Overview

The Digital Bingo System is a web-based application that allows users to organize and play bingo games efficiently. It features an intuitive interface for pre-game setup, pattern editing, game management, and winner verification. Utilizing Tailwind CSS for styling, the application ensures a responsive and interactive user experience.

## Installation

To set up the Digital Bingo System locally, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/digital-bingo-system.git
   ```

2. Navigate to the project directory:
   ```bash
   cd digital-bingo-system
   ```

3. Open the `index.html` file in your web browser.

## Usage

1. **Pre-Game Setup**:
   - Enter a batch number and a valid card series in CSV format (e.g., `0001, 0002, 0003`).
   - Click the "Load Cards" button to load the card series into the system.

2. **Pattern Editor**:
   - Enter a pattern name, select the desired pattern using the grid, and save it for later use.

3. **Game Setup**:
   - Specify the number of rounds for the game.
   - Click "Start Game" to begin.

4. **Playing the Game**:
   - Click on the numbers displayed to call them.
   - Use the Winner Verification section to check the winning card by entering the card series number and clicking "Verify Winner".

## Features

- **Responsive Design**: Mobile-friendly interface using Tailwind CSS.
- **Dynamic Pattern Editor**: Create and save custom bingo patterns.
- **Game Management**: Load card series, manage multiple rounds, and call numbers dynamically.
- **Winner Verification**: Verify winners based on the entered card series.

## Dependencies

The Digital Bingo System uses the following dependencies to enhance its functionality and appearance:

- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com)

These libraries are linked directly within the HTML file.

## Project Structure

The project is structured as follows:

```
digital-bingo-system/
│
├── index.html         # Main HTML file for the Digital Bingo System.
├── patterns.js        # JavaScript for managing bingo patterns.
├── cards.js           # JavaScript for handling bingo cards.
└── game.js            # JavaScript for managing the game logic.
```

Each JavaScript file has distinct responsibilities, ensuring modularity and ease of maintenance.

## License

This project is open-source and available under the [MIT License](LICENSE).