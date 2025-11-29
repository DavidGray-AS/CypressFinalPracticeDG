import BasePage from "./BasePage";

export class HomePage extends BasePage {

    catergoryPhones = 'a[onclick="byCat(\'phone\')"]'
    catergoryLaptops = 'a[onclick= "byCat(\'notebook\')"]'
    catergoryMonitors = 'a[onclick= "byCat(\'monitor\')"]'
    storeProducts = 'a[class=hrefch]'
    productSectionBody = '#tbodyid>div'
    productTitleSection = '.card-title>a'
    productPriceSection = '.card-title+h5'
         

    clickCategoryPhones() {
        this.clickElement(this.catergoryPhones)
    }

    clickCategoryLaptops() {
        this.clickElement(this.catergoryLaptops)
    }

    clickCategoryMonitors() {
        this.clickElement(this.catergoryMonitors)
    }

    clickOnProduct(product) {
        this.clickElementText(this.storeItem, product)
    }

    
    asserrtUrlContainsHomeUrl(){
        this.asssertUrlContains('/index')
    }

    assertProductAreaContainsOneElement (){
        this.assertSectionContainsOneElement(this.productSectionBody)
    }

    assertProductCardContainsTitle(index, title){
        this.assertIndexedElementText(this.productTitleSection, index, title)
    }

    assertProductCardContainsPrice(index, price){
        this.assertIndexedElementDollarPrice(this.productPriceSection, index, price)
    }
}

