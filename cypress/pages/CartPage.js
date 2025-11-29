import BasePage from "./BasePage";


export class CartPage extends BasePage {

    cart = 'tbody'
    
    
    assertCartItem(item) {
        this.assertContainsText(this.cart,item)
    }

 assertCartProducts(item1, item2, item3) {
        this.assertCartItem(item1);
        this.assertCartItem(item2);
        this.assertCartItem(item3);
    }
    

    placeOrder(){
        this.clickElementText('button','Place Order')
    }
    
}