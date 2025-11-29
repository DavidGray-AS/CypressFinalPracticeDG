export default class BasePage {

    typeText(selector, text) {
        cy.get(selector).type(text);
    }
    clickElement(selector) {
        cy.get(selector).click();
    }

    clickElementText(selector, text) {
        cy.contains(selector, text).click();
    }

    assertAlertText(productAdded) {
        cy.on('window:alert', (text) => {
            expect(text).to.equal(productAdded);
        });
    }
    assertContainsText(selector, text) {
        cy.get(selector).should('contain', text);
    }

    assertContentVisible(selector) {
        cy.get(selector).should('be.visible');
    }


    asssertUrlContains(expectedUrlPart) {
        cy.url().should('include', expectedUrlPart);
    }

    assertSectionContainsOneElement(selector){
        cy.get(selector).should('have.length', 1);
    }

    assertIndexedElementText(selector, index, text) {
        cy.get(selector).eq(index).should('have.text',text);
    }

    assertIndexedElementDollarPrice(selector, index, text) {
        cy.get(selector).eq(index).should('have.text', '$' + text);
    }

}

