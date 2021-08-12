/// <reference types="cypress" />

import { login } from '../../../src/Utils/AuthUtils';

describe('logging in should take user to dashboard page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should log in successfully', () => {
    cy.login('joe@biden.us', 'joe');

    //check if it renders dashboard element
    cy.contains('Securities').should('be.visible');
  });

  it('After logging in, it should switch to the Option Chain page successfully', () => {
    cy.login('joe@biden.us', 'joe');

    // cy.contains('ABMD').click();
    cy.get("[data-testid='ticker']").first().click();
    cy.contains('Back');
  });
});

describe('should successfully add an option to watchlist', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should successfully login and add an option to watchlist', () => {
    cy.login('joe@biden.us', 'joe');

    cy.get("[data-testid='ticker']")
      .eq(9)
      // .invoke('text').as('text');
      .then((tickerTitle) => {
        let text = tickerTitle.text();
        cy.contains(text).click();
        console.log('ticker from inside', text);
        cy.contains(text);
        // cy.get('#to-wl-button').first().click();
      });

    // cy.get('#to-wl-button').first().click();
  });
});