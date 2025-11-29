
import { HomePage } from "../../pages/HomePage";

let homepage = new HomePage

describe('Intercept', function () {
    it('Intercept and Place 1 Element', function () {
        cy.fixture('storeProductToIntercept').then((interceptBody) => {
            cy.visit('https://demoblaze.com/index.html#')
            cy.intercept({
                method: 'POST',
                url: 'https://api.demoblaze.com/bycat',

            }, {
                statusCode: 200,
                body: interceptBody

            }).as('oneProduct');

            homepage.clickCategoryLaptops();
            cy.wait('@oneProduct');
            homepage.assertProductAreaContainsOneElement();
        });
    });

    it('Error', function () {

        cy.visit('https://demoblaze.com/index.html#')
        cy.intercept({
            method: 'POST',
            url: 'https://api.demoblaze.com/bycat'
        }, {
            statusCode: 400,
            body: {}
        }).as('errorIntercept');

        homepage.clickCategoryLaptops();
        cy.wait('@errorIntercept').then((error400) => {
            expect(error400.response.statusCode).to.eq(400);
        })
    });


    it('Contract Test', function () {

        cy.visit('https://demoblaze.com/index.html#')
        cy.intercept({
            method: 'POST',
            url: 'https://api.demoblaze.com/bycat'
        }).as('phones');

        homepage.clickCategoryPhones();
        cy.wait('@phones').then((interception) => {
            const items = interception.response.body.Items;
            items.forEach((item, index) => {
                homepage.assertProductCardContainsTitle(index, item.title);
                homepage.assertProductCardContainsPrice(index, item.price);
            });
        });



    });
})