# 10-Team-Profile-Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Week 10 of Columbia Engineering Coding Bootcamp challenges us to make a NodeJS app to create a Team Project page.

I used the Node package Inquirer to prompt the user for team data, including:

* Team Name
* Manager (singular)
  * Name
  * Employee ID
  * Email Address
  * Phone Number
* Engineer (one or more)
  * Name
  * Employee ID
  * Email Address
  * GitHub User Name
* Intern (one or more)
  * Name
  * Employee ID
  * Email Address
  * School Name

As you can see, the first three data items for each type of team member are the same: Name, Employee ID, and Email Address.  This gives us the opportunity to set up a class with this basic information, and then extend that base class to three new classes.  I set up a Team class to organize all the information in one object.

I also included the Jest package to perform some tests on the five classes.

## Installation

```sh
git clone https://github.com/chrispobrien/10-Team-Profile-Generator.git
```
This creates the folder 10-Team-Profile-Generator within which you will find the project files.  Issue these commands to initialize the node package manager and download dependencies:

```sh
cd 10-Team-Profile-Generator
npm init -y
npm install
```

## Usage

To run the class tests:
```sh
npm run test
```

When all tests pass, simply run app.js:

```sh
node app
```

Answer the prompts, and open the resulting index.html to see the results.

## Credits

The project contents are my own solution to this homework challenge.

## License

MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)