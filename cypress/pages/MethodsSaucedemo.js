class MethodsSaucedemo{

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


}
export default new MethodsSaucedemo();