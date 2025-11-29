import BasePage from "./BasePage";


export class CheckoutModal extends BasePage {

    customerName = '#name'
    orderCountry = '#country'
    orderCity = '#city'
    creditCard = '#card'
    cardMonth = '#month'
    cardyear = '#year'
    okButton = "button[class^= 'confirm btn']"

    enterOrderName(name) {
        this.typeText(this.customerName, name)
    }

    enterCountry(country) {
        this.typeText(this.orderCountry, country)
    }

    enterCity(city) {
        this.typeText(this.orderCity, city)
    }
    enterCreditCard(cc) {
        this.typeText(this.creditCard, cc)
    }
    enterMonth(month) {
        this.typeText(this.cardMonth, month)
    }
    enterYear(year) {
        this.typeText(this.cardyear, year)
    }

    clickOnPurchase() {
        this.clickElementText('button', 'Purchase')
    }

    assertconfirmationModalTitle() {
        this.assertContainsText('h2', 'Thank you for your purchase!')
    }

    assertconfirmationModalBodyText(orderDetail) {
        this.assertContainsText('p[class^=lead', orderDetail)
    }

    clickOnOkButton() {
        this.clickElement(this.okButton)
    }

}