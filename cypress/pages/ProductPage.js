import BasePage from "./BasePage";

export class ProductPage extends BasePage {

    addToCartButton = 'a[onclick^=addToCart]'
    
clickAddToCartButton() {
        this.clickElement(this.addToCartButton)
    }

assertProductAdded (){
    this.assertAlertText('Product added')
}
    }