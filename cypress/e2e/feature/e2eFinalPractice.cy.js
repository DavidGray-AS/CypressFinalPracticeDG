import { HomePage } from "../../pages/HomePage";
import { ProductPage } from "../../pages/ProductPage";
import { HeaderNavBar } from "../../pages/HeaderNavBar";
import { CartPage } from "../../pages/CartPage";
import { CheckoutModal } from "../../pages/CheckoutModal";
import { LoginModal } from "../../pages/LoginModal";
import StoreProducts from "../../fixtures/storeProducts.json";
import userInfo from "../../fixtures/userInfo.json";

let homePage = new HomePage
let productPage = new ProductPage
let headerNavBar = new HeaderNavBar
let cartPage = new CartPage
let checkoutModal = new CheckoutModal
let loginModal = new LoginModal


let product1 = StoreProducts.phones.samsungS6
let product2 = StoreProducts.laptops.macBookAir
let product3 = StoreProducts.monitors.appleMonitor

describe('Final Practice e2e', function () {
beforeEach(() => {
        cy.visit('https://demoblaze.com/index.html#');
    });



    it('Place an Order - one item per category', function () {
        homePage.clickCategoryPhones();
        homePage.clickOnProduct(product1);
        productPage.clickAddToCartButton();
        productPage.assertProductAdded();
        headerNavBar.selectHomeButton();
        homePage.clickCategoryLaptops();
        homePage.clickOnProduct(product2);
        productPage.clickAddToCartButton();
        productPage.assertProductAdded();
        headerNavBar.selectHomeButton();
        homePage.clickCategoryMonitors();
        homePage.clickOnProduct(product3);
        productPage.clickAddToCartButton();
        productPage.assertProductAdded();
        headerNavBar.selectCartButton();
        cartPage.assertCartProducts(product1, product2, product3);
        cartPage.placeOrder();
        checkoutModal.enterOrderName(userInfo.customerData.name);
        checkoutModal.enterCountry(userInfo.customerData.country);
        checkoutModal.enterCity(userInfo.customerData.city);
        checkoutModal.enterCreditCard(userInfo.customerData.creditCard);
        checkoutModal.enterMonth(userInfo.customerData.month);
        checkoutModal.enterYear(userInfo.customerData.year);
        checkoutModal.clickOnPurchase();
        checkoutModal.assertconfirmationModalTitle();
        checkoutModal.assertconfirmationModalBodyText(userInfo.customerData.firstName);
        checkoutModal.assertconfirmationModalBodyText(userInfo.customerData.creditCard);
        cy.wait(1000); //entiendo que usualmente no es buena practica 
        // pero fue necesario ya que no depende del elemento que esta presente pero si el click se hace ese rato la pagina no funciona
        checkoutModal.clickOnOkButton();
        homePage.asserrtUrlContainsHomeUrl();
         })


         it('Log In into User', function () {

        headerNavBar.selectLoginButton();
        loginModal.assertModalVisible();
        cy.wait(1000) //same here
        loginModal.login(userInfo.userData.username, userInfo.userData.password);
        headerNavBar.assertWelcomeUserNameIsVisible(userInfo.userData.username)
         });
    });





    // it('Place an Order', function () {
    //     homePage.clickCategoryPhones();
    //     cy.contains('#itemc', 'Phones').click()
    //     cy.contains('a[class=hrefch]', 'Samsung galaxy s6').click()
    //     productPage.clickAddToCartButton();
    //     cy.on('window:alert', (text) => {
    //         expect(text).to.equal('Product added');
    //         });
    //     cy.contains('a[class=nav-link]', 'Home').click()
    //     cy.contains('#itemc', 'Laptops').click()
    //     cy.contains('a[class=hrefch]', 'MacBook air').click()
    //     cy.contains('a[class^=btn]', 'Add to cart').click()
    //     cy.on('window:alert', (text) => {
    //         expect(text).to.equal('Product added');
    //         });
    //     cy.contains('a[class=nav-link]', 'Home').click()
    //     cy.contains('#itemc', 'Monitors').click()
    //     cy.contains('a[class=hrefch]', 'Apple monitor 24').click()
    //     cy.contains('a[class^=btn]', 'Add to cart').click()
    //     cy.on('window:alert', (text) => {
    //         expect(text).to.equal('Product added');
    //         });
    //     cy.contains('a[class=nav-link]', 'Cart').click()
    //     cy.get('tbody').should('contain','MacBook air').and('contain','Apple monitor 24').and('contain','Samsung galaxy s6')
    //     cy.contains('button', 'Place Order').click()
        
    //     cy.get('#name').type('David Samuel Gray');
    //     cy.get('#country').type('Bolivia');
    //     cy.get('#city').type('Santa Cruz');
    //     cy.get('#card').type('4242424242424242');
    //     cy.get('#month').type('07');
    //     cy.get('#year').type('2033');
    //      cy.contains('button', 'Purchase').click()
    //      cy.get('h2').should('contain', 'Thank you for your purchase!')
    //      cy.get('p[class^=lead]').should('contain', 'David').and('contain','4242424242424242')
    //      cy.wait(1000)
    //      cy.contains("button[class^= 'confirm btn']", 'OK').click()
    //      cy.url().should('include', '/index');
    //      })


    //      it.only('Sign In', function () {

    //     cy.contains('a[class=nav-link]', 'Log in').click()
    //     cy.get('.modal-content').should('be.visible')
    //     cy.wait(1000)
    //     cy.get('#loginusername').type('david.gray.1').should('have.value', 'david.gray.1');
    //     cy.get('#loginpassword').type('david123*');
    //     cy.contains('button', 'Log in').click()
    //     cy.get('a[class=nav-link]').should('contain','Welcome'+' '+'david.gray.1',{timeout: 3000})
    //      });
    // });