describe('Final Practice', function () {
    before(() => {
        cy.log("Welcome to David's Final Practice Homework");
        cy.clearCookies
        cy.clearLocalStorage
        cy.visit('https://automationintesting.online/')
        Cypress.on('uncaught:exception', (err) => {
            if (err.message.includes('Minified React error #418')) {
                return false;
            }
        });
        Cypress.on('uncaught:exception', (err) => {
  // Ignore React "minified error" and undefined length errors
  if (
    err.message.includes("Minified React error") ||
    err.message.includes("reading 'length'") ||
    err.message.includes("Cannot read properties of undefined")
  ) {
    return false; // prevents Cypress from failing the test
  }
});
    });


    it('Verify availability for rooms ', function () {
        cy.contains('label', 'Check In')
            .parent()
            .find('input[class=form-control]')
            .click();
        cy.get("button[aria-label='Next Month']").click();
        cy.contains('div.react-datepicker__day', 23).click();
        cy.contains('label', 'Check Out')
            .parent()
            .find('input[class=form-control]')
            .click();
        cy.get("button[aria-label='Next Month']").click();
        cy.contains('div.react-datepicker__day', 29).click();
        cy.contains('button', 'Check Availability').click();
        cy.contains('a[class*=btn]', 'Book now').first().click();
        cy.get("h2[class^='card-title']").should('contain', 'Book This Room');
        cy.url().should('include', '/reservation');
        cy.get('#doReservation').click()
        cy.get("input[placeholder='Firstname']").type('David')
        cy.get("input[placeholder='Lastname']").type('Gray')
        cy.get("input[placeholder='Email']").type('david.gray@test.com')
        cy.get("input[placeholder='Phone']").type('77799988880111')
        cy.wait(1000)
        cy.contains('button', 'Reserve Now').click();
        
       cy.get("h2[class^='card-title']",{ timeout: 10000}).should('contain', 'Booking Confirmed');
        cy.get('strong').should('contain', '23').and('contain', '29');
        cy.get("a[type='button']").should('contain', 'Return home');
        cy.contains("a[type='button']", 'Return home').click();
        cy.url().should('eq', 'https://automationintesting.online/');
    });


});


// cy.visit('https://automationintesting.online/')
// cy.get('#booking input[value="25/11/2025"]').click();
// cy.get('#booking span.react-datepicker__navigation-icon--next').click();
// cy.get('#booking div.react-datepicker__day--023').click();
// cy.get('#booking input.react-datepicker-ignore-onclickoutside').click();
// cy.get('#booking button.react-datepicker__navigation--next').click();
// cy.get('#booking div.react-datepicker__day--027').click();
// cy.get('#booking button.btn').click();
// cy.get('#rooms a[href="/reservation/2?checkin=2025-12-23&checkout=2025-12-27"]').click();
// cy.get('#root-container div.card.bg-light div:nth-child(2) span:nth-child(1)').should('have.text', '£150 x 4 nights');
// cy.get('#root-container h1.fw-bold').should('have.text', 'Double Room');
// cy.get('#root-container span:nth-child(1) button:nth-child(3)').click();
// cy.get('#root-container div.rbc-event-content').should('have.text', 'Selected');
// cy.get('#doReservation').click();
// cy.get('#root-container div.card-body > div:nth-child(3) > span:nth-child(1)').should('be.visible');
// cy.get('#root-container div.card-body > div:nth-child(4) > span:nth-child(1)').should('be.visible');
// cy.get('#root-container button.btn-primary').click();
// cy.get('#root-container [name="firstname"]').click();
// cy.get('#root-container [name="firstname"]').type('David');
// cy.get('#root-container [name="lastname"]').click();
// cy.get('#root-container [name="lastname"]').type('Gray');
// cy.get('#root-container [name="email"]').click();
// cy.get('#root-container [name="email"]').type('david.gray@example.com');
// cy.get('#root-container [name="phone"]').click();
// cy.get('#root-container [name="phone"]').type('7888999444');
// cy.get('#root-container div.card.bg-light div.card-body').click();
// cy.get('#root-container button.btn-primary').click();
// cy.get('#root-container [name="firstname"]').click();
// cy.get('#root-container [name="phone"]').click();
// cy.get('#root-container [name="firstname"]').click();
// cy.get('#root-container [name="firstname"]').type(' Sam');
// cy.get('#root-container [name="phone"]').click();
// cy.get('#root-container [name="phone"]').type('3');
// cy.get('#root-container button.btn-primary').click();