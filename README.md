# Thoughtful AI Kata

The projects function is to sort packages to the correct stack according to their volume and mass.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Running Unit Tests](#running-unit-tests)
- [License](#license)

## Installation

Describe how to install the project, including any prerequisites, dependencies, and installation steps.
At the package root, start by installing node.js

To use this project, you need to have Node.js and npm installed on your system. Follow the instructions below to install them:

### Installing Node.js and npm

#### Windows:

1. **Using the official installer:**
    - Go to the [Node.js website](https://nodejs.org/).
    - Download the Windows installer (.msi) for the LTS (Long Term Support) version.
    - Run the installer and follow the prompts to install Node.js and npm.
    - After installation, open a command prompt and verify the installation by running:
      ```
      node -v
      npm -v
      ```

2. **Using Chocolatey (package manager for Windows):**
    - Open Command Prompt or PowerShell as an administrator.
    - Run the following commands:
      ```
      choco install nodejs
      ```
    - After installation, verify the installation by running:
      ```
      node -v
      npm -v
      ```

#### macOS:

1. **Using Homebrew:**
    - Open Terminal.
    - Run the following commands:
      ```
      brew update
      brew install node
      ```
    - After installation, verify the installation by running:
      ```
      node -v
      npm -v
      ```

#### Linux (Ubuntu/Debian):

1. **Using apt (for Ubuntu/Debian):**
    - Open Terminal.
    - Run the following commands:
      ```
      sudo apt update
      sudo apt install nodejs npm
      ```
    - After installation, verify the installation by running:
      ```
      node -v
      npm -v
      ```

#### Linux (Fedora):

1. **Using yum (for Fedora):**
    - Open Terminal.
    - Run the following commands:
      ```
      sudo dnf install nodejs npm
      ```
    - After installation, verify the installation by running:
      ```
      node -v
      npm -v
      ```

### Installing ts-node globally

To run TypeScript files directly with Node.js, you can install `ts-node` globally:

```bash
npm install -g ts-node
```

### Installing project package.json dependencies
After installing Node.js, npm, and ts-node you can proceed with installing and using this project.

```bash
npm install 
```

## Usage

Run the sorting function by passing in package dimensions (width, height, length) and mass
```bash
ts-node index.ts --width 10 --height 10 --length 10 --mass 10
```

You can also use the shorthand inputs like this
```bash
ts-node index.ts --w 10 --h 10 --l 10 --m 10
```

## Running Unit Tests

To run the unit tests for this project, follow these steps:

1. **Install Dependencies:**
   - If you haven't already done so, install project dependencies by running:
     ```bash
     npm install
     ```

2. **Run Tests:**
   - Once the dependencies are installed, run the unit tests using the following command:
     ```bash
     npm test
     ```

3. **View Test Results:**
   - After running the tests, examine the output in the console to see the test results and any errors or failures.

4. **Optional: Coverage Reports:**
   - To generate a code coverage report, you can run:
     ```bash
     npm run coverage
     ```
   - This will generate coverage reports that you can view to assess the code coverage of your tests.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).