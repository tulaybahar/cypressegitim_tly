require('cypress-xpath');
import dashboardLocators from "../fixtures/dashboardLocators";
import methods from "../pages/methods"
describe('Includes dashboard page test scenarios', () => {

  Cypress.on('uncaught:exception', () => { return false })
  it ('Login to cloudworks', () => {
    methods.visit('http://10.20.10.208:8025/login')
    methods.fillInput(dashboardLocators.username,'tulay.bahar@hotmail.com')
    methods.fillInput(dashboardLocators.password,'1q2w3eASD!')
    methods.clickButton(dashboardLocators.loginButton,5000)
    cy.get(dashboardLocators.overviewHesabim,'Hesabım')
    //methods.shouldHaveText(dashboardLocators.overviewGenelBakis,'Genel Bakış')
    cy.xpath('//a[@class="initials-first-surname"]').contains
  })
  it('Verify dashboard page', () => {
    methods.visit('http://10.20.10.208:8025')
    methods.shouldHaveText(dashboardLocators.overviewHesabim,'Hesabım')
    methods.shouldHaveText(dashboardLocators.overviewGenelBakis,'Genel Bakış')
    cy.xpath('//a[@class="initials-first-surname"]').contains
  })
  it('Kullanım Koşulları Kontrol', () => {
    methods.visit('http://10.20.10.208:8025')
    methods.clickButton(dashboardLocators.overviewKullanimKosullari)
    methods.shouldHaveText(dashboardLocators.checkKullanimKosullari,'Kullanım Koşulları')
  })
  it('Gizlilik Politikası ve Kişisel Veriler Kontrol', () => {
    methods.visit('http://10.20.10.208:8025')
    methods.clickButton(dashboardLocators.overviewGizlilikPolitikasiveKisiselVeriler,5000)
    methods.shouldHaveText(dashboardLocators.checkGizlilikPolitikasiveKisiselVeriler,'Gizlilik Politikası ve Kişisel Veriler')
  })
  it('Hakkımızda Kontrol', () => {
    methods.visit('http://10.20.10.208:8025')
    methods.clickButton(dashboardLocators.overviewHakkimizda,5000)
    methods.shouldHaveText(dashboardLocators.checkHakkimizda,'Hakkımızda')
  })

  it('İletişim Kontrol', () => {
    methods.visit('http://10.20.10.208:8025')

    methods.clickButton(dashboardLocators.overviewİletisim,5000)
    methods.shouldHaveText(dashboardLocators.checkİletişim,'Bize Ulaşın')
  })
  it('Şifremi Unuttum Kontrol', () => {
    methods.visit('http://10.20.10.208:8025/login')
    methods.clickButton(dashboardLocators.sifremiUnuttum,7000)
    methods.clickButton(dashboardLocators.forgotPasswordEmail,)
    methods.fillInput(dashboardLocators.forgotPasswordEmail,'tulay.bahar@hotmail.com')
    
  })

})
