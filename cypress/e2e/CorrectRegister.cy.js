import Register from '../support/pages/register/registerPage'

describe('Testing register on cypress alurapic page', () => {
  beforeEach(() => {
    // cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    Register.accessRegisterPage();
  })
  it('Visit alura pic page and register new user', () => {
    // cy.contains('a', 'Register now').click();
    // cy.get('input[data-test="email"]').type('billym@email.com.br')
    // cy.get('input[data-test="fullName"]').type('Billy Rodrigues Francisco Mafra')
    // cy.get('input[data-test="registerUserName"]').type('qaabilly111')
    // cy.get('input[data-test="registerPassword"').type(12345678)
    // cy.wait(5000)
    // cy.get('body').then(($body) => {
    //   if ($body.text().includes('User available')) {
    //     cy.get('button[data-test="btnRegister"]').click()
    //   } else {
    //     cy.contains('Please, login!').click()
    //   }
    // })
    Register.fillFields();
    Register.clickButton();
  })
})