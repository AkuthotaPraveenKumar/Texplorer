# GitHub Topic Explorer

React web application that displays all the [topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic) related to the term "react", using the GitHub GraphQL API

## Demo

![React Topic](./screenshots/react.png "React Topic")

## How to run

### Pre-requisites


-   Create API token from Github Developer settings.

-   Place token in src/configs/github.json

### Running application

```
$ npm i
$ npm start
```

## Libraries

-   Material UI : React pre-built components
-   Apollo : GraphQL interactions

## Future Improvements

-   API Token : Move API Token to backend or enable github sso. Placing token in UI is insecure
-   Styling : Use styled components instead of plain CSS for less error prone design system
