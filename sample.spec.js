<reference types="cypress" />

import Chance from 'chance';
const chance = new Chance(); //to generate email adresse, text etc
// cypress sees Mocha and Chi as its underline test libraries

//describe the test suite
describe('Firestarter', () => {
    const email = chance.email();
    const pass = 'ValidPassord23';

    //the state is not reset between each test so if you want to go back to the home page for each example you can set a beforeEach call back 
    beforeEach( () => {
        cy.visit('https://www.emag.ro/');
    });

    it('has a title', () => {
        cy.contains('eMAG.ro - Căutarea nu se oprește niciodată');
        expect(2).to.equal(2)
    });
    
    it('blocks protected routes' , () => {
        // cy.get('')
        cy.contains('Genius').click()
    });
);
