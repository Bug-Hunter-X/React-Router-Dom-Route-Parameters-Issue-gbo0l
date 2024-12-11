# React Router Dom Route Parameters Issue

This repository demonstrates a bug related to route parameters in React Router Dom v6.  The issue involves unexpected behavior when attempting to access parameters from the URL.

## Bug Description

The provided code uses `react-router-dom` v6 to define routes.  However, when navigating to routes with parameters, the parameters are not correctly accessed or the component fails to render as expected. This may manifest as incorrect data display or unexpected page behavior.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe unexpected behavior when navigating to routes with parameters, e.g. `/user/123`.

## Solution

The solution involves correctly implementing route parameters in the component using the `useParams` hook provided by React Router. This hook allows us to access the parameters in a controlled manner.  See `bugSolution.js` for the fix.
