# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation

A web app with a modular routing system.

- ✅ Routes should easy to add and remove from the application
- Routes should be able to integrate to existent system
- Routes should have permission based system
- Modules in routes should have full control over the page appearance, CSS etc.
- Modules in routes should have control over appearance of the menu.
- Modules can turn on and off (show/hide) menu (Top Menu, Left Menu, Bottom Menu).
- Modules can disable / remove / hide items from the menu.
- Router must have custom and default exception routes eg. `404`.


- ✅ Developer must be able to register routes in `routes.js` or via function `routes.register({..some route})`


- Developer must create routes by route `slag` eg. `routes.create('user_slag')`.



A system where modules can pass parameters from config and change appearance of the menu
gives flexibility to developers to have one point of truth for settings, routes, appearance in an application.

**Single source of truth.**

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
