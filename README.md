# FlashCards
> A [Front-End Project](https://github.com/lbmerchant93/flashcards-starter) by [Lucas Merchant](https://github.com/lbmerchant93)
> Project Managers [Travis Rollins](https://github.com/Kalikoze) & [David Whitaker](https://github.com/damwhit)

## Abstract
This is a solo project for Module 2 for the 2010 Front End Cohort, in which the students will write a program to simulate a set of flash cards through the command line. A user will be able to see the question, take guesses, and see a final score at the end of the round. Along with their score they will see the instructions to press 'control+c' to exit the game. Students must use their knowledge and understanding of JavaScript, TDD, ESLint and Node.js to demonstrate the [Project Goals](#project-goals).

### Project Goals

Below are the learning goals taken from the project specs.

``` Markdown
- Contribute code to an partially constructed object-oriented application
- Follow spec/prompts to make a working application
- Implement ES6 classes
- Write modular, reusable code that follows SRP (Single Responsibility Principle)
- Implement a robust testing suite using TDD
```

## Prerequisites

This project was developed on macOs Catalina 10.15.6 and is run through the Apple Terminal Version 2.10 (433).

## Technologies

- JavaScript
- Node.js
- Git
- Github
- ESLint

## Install/Setup

Follow these steps for running and playing the game:
- Fork/clone down this repo to make a local directory
- Once cloned, move into the directory
- In the directory, enter 'node index.js' into the command line
- Have fun and play the game! (see [Game Play](#game-play) for how to play)

## Game Play

Starting the game will look like this:
![Starting Game](https://media.giphy.com/media/HAO85XXZDJ4HlaPuuT/giphy.gif)

In this gif you see that once you enter 'node index.js' into the terminal the welcome message appears and the game is started The first question also appears with the three possible answers you are to chose from. You may either press the corresponding number or key up/down to select the answer you choose. By pressing enter you submit your chosen answer. The game then evaluates your response and will return a statement of whether you were correct or incorrect. Pressing enter will bring up the next question. This is repeated until you have answered all of the questions.

Once on the last question, the end game statement will show up along with the percentage of correctly guessed answers and how to exit the game. See the gif below:
![Ending Game](https://media.giphy.com/media/yCCTKxTMyF3CrTKILV/giphy.gif)


## Challenges
- Making sure to link the right files together in the right order.
- Knowing when to test for something without being redundant.
