require('cypress-xpath');
import sdLocators from "../fixtures/sdLocators";
import methods from "../pages/methods"
describe('Includes dashboard page test scenarios', () => {

  Cypress.on('uncaught:exception', () => { return false })

/*https://www.saucedemo.com/
Username alanina standart_user
Password alanine secret_sauce yazilacak
Sepete urun eklenecek
Sepetime gidilecek
Urunun eklendiğini verify edeceksiniz
Checkout butonuna basılacak
First name, last name ve zip kodu doldurulacak
Finish butonuna basalım
Thank you for your order! mesaji goruntulenecek */
  it ('Login and text validations', () => {
    methods.visit('https://www.saucedemo.com/')
        methods.fillInput(sdLocators.username,'standard_user')
        methods.fillInput(sdLocators.password,'secret_sauce')
        methods.clickButton(sdLocators.loginButton,2000)
        methods.clickButton(sdLocators.addToCart)
        methods.shouldHaveText(sdLocators.removeCheck,'Remove')
        methods.clickButton(sdLocators.goToCartIcon)
        methods.shouldHaveText(sdLocators.description,'Description')
        methods.clickButton(sdLocators.checkoutButton)
        methods.fillInput(sdLocators.firstProductName,'first product name')
        methods.fillInput(sdLocators.lastProductName,'last product name')
        methods.fillInput(sdLocators.postalCode,'last product postalcode')
        methods.clickButton(sdLocators.continueButton)
        methods.shouldHaveText(sdLocators.paymentInfo,'Payment Information')
        methods.shouldPageExistItem(sdLocators.paymentInfo)
        methods.shouldHaveText(sdLocators.shippingInfo,'Shipping Information')
        methods.shouldHaveText(sdLocators.priceTotal,'Price Total')
        methods.clickButton(sdLocators.finishButton)
        methods.shouldHaveText(sdLocators.thankU,'Thank you for your order!')
  })
})

