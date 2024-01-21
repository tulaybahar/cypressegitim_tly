class Methods{

    visit(url="/"){
        cy.visit(url)
    }
    findElement(locator){
    //const element = locator.startsWith("/") || locator.startsWith('(') ? cy.xpath(locator) : cy.get(locator);
    if(locator.startsWith('/')){
        return cy.xpath(locator)
    }else{
        return cy.get(locator)
    }
    }
    clickButton(locator,afterWait=0){
     return this.findElement(locator).click({force:true}).wait(afterWait)
    }
    fillInput(locator,text,delay=0){
        return this.findElement(locator).type(text,{delay})
    }
    wait(time){
        return cy.wait(time)
    }
    shouldHaveText(locator,text){
        return this.findElement(locator).should('have.text',text)
    }
    shouldPageExistItem(locators){
        return this.findElement(locators).should('exist');
    }
      shouldHaveNotItem(locators){
        this.wait(1000)
        return this.findElement(locators).should('not.exist')
    } 
      shouldHaveNotText(locators,text){
        return this.findElement(locators).should('not.have.text', text)
    }



}
export default new Methods();