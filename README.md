# cypress
Cypress workflow
https://docs.cypress.io/guides/end-to-end-testing/testing-your-app#Stubbing-the-server

How to get elements - details:
https://docs.cypress.io/guides/end-to-end-testing/protractor-to-cypress#What-you-ll-learn


```
describe('Authorization Tests', () => {
  it('allows the user to signup for a new account', () => {
    cy.visit('/signup')
    cy.get('#email-field').type('user@email.com')
    cy.get('#confirm-email-field').type('user@email.com')
    cy.get('#password-field').type('testPassword1234')
    cy.get('button').contains('Create new account').click()

    cy.url().should('include', '/signup/success')
  })
})
```

### How to Get DOM Elements
```
// Get an element
cy.get('h1')

// Get an element using a CSS selector.
cy.get('.my-class')

// Get an element with the given id.
cy.get('#my-id')

// Get an element using an input name selector.
cy.get('input[name="field-name"]')

//Get an element by the text it contains within a certain CSS selector
cy.get('.my-class').contains('text')

//Get the first element containing a specific text (available for any element)
cy.contains('text')

// Get all list-item elements on the page
cy.get('li')

/// Get all elements by using a CSS selector.
cy.get('.list-item')

// Find an element using an input name selector.
cy.get('input[name="field-name"]')
```

## How to Interact with DOM Elements

comands:
https://docs.cypress.io/api/commands/click

.get()
.type()
.blur() - Make a focused DOM element blur.
.focus() - Focus on a DOM element.
.clear() - Clear the value of an input or textarea.
.check() - Check checkbox(es) or radio(s).
.uncheck() - Uncheck checkbox(es).
.select() - Select an <option> within a <select>.
.dblclick() - Double-click a DOM element.
.rightclick() - Right-click a DOM element.

```
// Click on the element
cy.get('button').click()

// Send keys to the element (usually an input)
cy.get('input').type('my text')

// Clear the text in an element (usually an input)
cy.get('input').clear()

// Check the first checkbox on a page
cy.get('[type="checkbox"]').first().check()

// Check a radio button with the value "radio1"
cy.get('[type="radio"]').check('radio1')

// Uncheck the first checkbox that is not disabled
cy.get('[type="checkbox"]').not('[disabled]').first().uncheck()

// Select an option with the text value "my value" from a select list
cy.get('select[name="optionsList"]').select('my value')

// Scroll an element into view
cy.get('#my-id').scrollIntoView()

// retry until we find 3 matching <li.selected>
cy.get('li.selected').should('have.length', 3)

// retry until this input does not have class disabled
cy.get('form').find('input').should('not.have.class', 'disabled')

// retry until this textarea has the correct value
cy.get('textarea').should('have.value', 'foo bar baz')
```

### Text Content
```
// assert the element's text content is exactly the given text
cy.get('#user-name').should('have.text', 'Joe Smith')
// assert the element's text includes the given substring
cy.get('#address').should('include.text', 'Atlanta')
// retry until this span does not contain 'click me'
cy.get('a').parent('span.help').should('not.contain', 'click me')
// the element's text should start with "Hello"
cy.get('#greeting')
  .invoke('text')
  .should('match', /^Hello/)
// tip: use cy.contains to find element with its text
// matching the given regular expression
cy.contains('#a-greeting', /^Hello/)
```

### Visibility
```
// retry until this button is visible
cy.get('button').should('be.visible')
```
### Existence
```
// retry until loading spinner no longer exists
cy.get('#loading').should('not.exist')
```
### State
```
// retry until our radio is checked
cy.get(':radio').should('be.checked')
```

### CSS
```
// retry until .completed has matching css
cy.get('.completed').should('have.css', 'text-decoration', 'line-through')

// retry while .accordion css has the "display: none" property
cy.get('#accordion').should('not.have.css', 'display', 'none')
```

### Displayed property
```
cy.get('#example-input')
  .should('be.disabled')
  // let's enable this element from the test
  .invoke('prop', 'disabled', false)

cy.get('#example-input')
  // we can use "enabled" assertion
  .should('be.enabled')
  // or negate the "disabled" assertion
  .and('not.be.disabled')

describe('verify elements on a page', () => {
  it('verifies that a link is visible', () => {
    cy.get('a.submit-link').should('be.visible')
  })
})
```

### Negative assertions
```
cy.get('.todo').should('not.have.class', 'completed')
cy.get('#loading').should('not.be.visible')
```

## Network Handling
### Network Spying - manage the behavior of any network request
```
it('should display a Load More button after fetching and displaying a list of users', () => {
  cy.visit('/users')
  cy.intercept('/users/**')
  cy.get('button').contains('Load More')
})
```

### Network Stubbing
```
it('should display a warning when the third-party API is down', () => {
  cy.intercept(
    'GET',
    'https://api.openweathermap.org/data/2.5/weather?q=Atlanta',
    { statusCode: 500 }
  )
  cy.get('.weather-forecast').contains('Weather Forecast Unavailable')
})

```

You can also use the intercept API to stub a custom response for specific network requests:

```
it('projects endpoint should return 2 projects', () => {
  cy.intercept('/projects', {
    body: [{ projectId: '1' }, { projectId: '2' }],
  }).as('projects')
  cy.wait('@projects').its('response.body').should('have.length', 2)
})
```

## Navigating Websites
```
it('visits a page', () => {
  cy.visit('/about')
  cy.go('forward')
  cy.go('back')
})
```

## Automatic Retrying and Waiting
```
// Clicking a button
cy.get('button').click()

// Make assertion. No waiting necessary!
cy.get('.list-item').contains('my text')

```

## Using Page Objects
```
const page = {
  login: () => {
    cy.get('.username').type('my username')
    cy.get('.password').type('my password')
    cy.get('button').click()
  },
}

it('should display the username of a logged in user', () => {
  page.login()
  cy.get('.username').contains('my username')
})
```

Cypress also provides a Custom Command API to enable you to add methods to the cy global directly:

```
Cypress.Commands.add('login', (username, password) => {
  cy.get('.username').type(username)
  cy.get('.password').type(password)
})
```

You can use your own custom commands in any of your tests:
```
it('should display the username of a logged in user', () => {
  cy.login('Matt', Cypress.env('password'))
  cy.get('.username').contains('Matt')
})
```

# Parallelization

```
cypress run --record --parallel
```

# Angular Schematic Configuration
### Running the builder with a specific browser
Before running Cypress in open mode, ensure that you have started your application server using ng serve.
```
"cypress-open": {
  "builder": "@cypress/schematic:cypress",
  "options": {
    "watch": true,
    "headless": false,
    "browser": "chrome"
  },
  "configurations": {
    "production": {
      "devServerTarget": "{project-name}:serve:production"
    }
  }
}
```
### Recording test results to the Cypress Dashboard

We recommend setting your Cypress Dashboard recording key as an environment variable and NOT as a builder option when running it in CI.

```
"cypress-run": {
  "builder": "@cypress/schematic:cypress",
  "options": {
    "devServerTarget": "{project-name}:serve",
    "record": true,
    "key": "your-cypress-dashboard-recording-key"
  },
  "configurations": {
    "production": {
      "devServerTarget": "{project-name}:production"
    }
  }
}
```

### Specifying a custom Cypress configuration file
```
"cypress-run": {
  "builder": "@cypress/schematic:cypress",
  "options": {
    "devServerTarget": "{project-name}:serve",
    "configFile": "cypress.production.config.js"
  },
  "configurations": {
    "production": {
      "devServerTarget": "{project-name}:production"
    }
  }
}
```

### Running Cypress in parallel mode within CI
```
"cypress-run": {
  "builder": "@cypress/schematic:cypress",
  "options": {
    "devServerTarget": "{project-name}:serve",
    "parallel": true,
    "record": true,
    "key": "your-cypress-dashboard-recording-key"
  },
  "configurations": {
    "production": {
      "devServerTarget": "{project-name}:production"
    }
  }
}
```

#Constants
```
// Set up some constants for the selectors
const counterSelector = '[data-cy=counter]'
const incrementSelector = '[aria-label=increment]'
const decrementSelector = '[aria-label=decrement]'

//for component testing
it('when the decrement button is pressed, the counter is decremented', () => {
  // Arrange
  cy.mount('<app-stepper></app-stepper>', {
    declarations: [StepperComponent],
  })
  // Act
  cy.get(decrementSelector).click()
  // Assert
  cy.get(counterSelector).should('have.text', '-1')
})
```

# JQuerying Elements
```
// Each method is equivalent to its jQuery counterpart. Use what you know!
cy.get('#main-content').find('.article').children('img[src^="/static"]').first()
```
