const el = require('./elements').ELEMENTS;

class Register {
    accessRegisterPage(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
        cy.contains('a', 'Register now').click();
    }
    fillFields(){
        cy.get(el.email).type('billym@email.com.br')
        cy.get(el.fullName).type('Billy Rodrigues Francisco Mafra')
        cy.get(el.registerUserName).type('qaabilly1111')
        cy.get(el.registerPassWord).type(12345678)
    }
    clickButton(){
        cy.wait(5000)
        cy.get('body').then(($body) => {
          if ($body.text().includes('User available')) {
            cy.get(el.buttonRegister).click()
          } else {
            cy.contains('Please, login!').click()
          }
        })
    }
}

export default new Register();