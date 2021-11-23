# tretton37 JS Code Assignment

This project is hosted on [Heroku](https://aqueous-brushlands-55343.herokuapp.com/). If you wish to run it yourself:

- Clone this repo
- `npm install`
- Provide an API key in the environment variable `REACT_APP_API_KEY`. For example in a `.env.local` file.
- `npm start`
- Visit http://localhost:3000

If you wish to run the End-to-End tests:

- Make sure the development server is running with `npm start`
- Run the tests with `npm run e2e` or `./node_modules/cypress/bin/cypress open` for a graphical interface.

## Features implemented

**Typescript**

It's what I normally write in and I would have used typescript either way.

**End-to-End Testing**

I wanted to try to learn something new while doing this project. End-to-End testing is something I've never done before and it looked like pretty fun to do.

**Filter by name and office**

I chose this one because I wanted the user to be able to interact a bit with site and this feature made most sense (compared to list/grid and sorting).

**Responsive design**

Because it feels like a given feature on any modern web app and I would probably have tried to make it look alright on smaller screens either way.

**Infinity scroll**

It makes sense for this page as it is a long list of employees. I have also never done a infinity scroll before and thought it'd be interesting to try it. In hindsight it was definitely a good idea as it fixed some minor performace issues I was having.

**Available on a free public url**

Just decided to do this when I was finished as it's done quickly and it's nice for whoever is reviewing this.

## Code

The main parts of the code base and what they do.

### [api.ts](src/api.ts)

Code responisble to talking to the API. Quite basic as we're only fetching data from one endpoint.

### [App](src/App)

Top component where most of the state lives. In charge of getting employee data when the app starts and filters the employees displayed based on search input. Also where the styling concerning screen widths is.

### [EmployeeCard](src/EmployeeCard)

Stateless component only concerned with the visual aspects of each employee card in the grid.

### [EmployeeList](src/EmployeeCard)

Component responsible for rendering the EmployeeCards and where all the infinity scroll logic is.

### [home.test.ts](cypress/integration/home.test.ts)

The End-to-End test. Done with Cypress.
