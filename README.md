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

