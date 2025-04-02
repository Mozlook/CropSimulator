# CropSimulator

![React](https://img.shields.io/badge/React-v17.0.2-blue)
![License](https://img.shields.io/badge/License-MIT-green)

CropSimulator is a crop management simulator written in React. The game allows users to plant, water, fertilize, and harvest crops, as well as shop for upgrades.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Mozlook/CropSimulator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd CropSimulator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application in development mode, execute:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project consists of the following files and directories:

```
CropSimulator/
├── src/
│   ├── components/
│   │   ├── Field.jsx
│   │   ├── Header.jsx
│   │   ├── Roslinka.jsx
│   │   └── Shop.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
└── README.md
```

## Components

### App.jsx

The main application component that holds the state of the page and crops. Depending on the `page` state, it renders the appropriate component (`Field` or `Shop`).

### Field.jsx

A component responsible for displaying the crop field. It contains the logic for planting, watering, fertilizing, rescuing, and harvesting crops.

### Header.jsx

The application header containing action buttons and a dropdown menu with crop options.

### Plant.jsx

A component representing a single plant in the field. Displays the appropriate graphic depending on the plant's state (type, growth stage, whether it is spoiled).

### Shop.jsx

A shop component where you can buy upgrades and new seeds.

## Contributing

If you would like to contribute to the project, please open a pull request or submit an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
