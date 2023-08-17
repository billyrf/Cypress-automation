describe('Testing register on cypress alurapic page', () => {

    const users = require('../fixtures/users.json')

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })

    users.forEach(users => {
        it('Visit alura pic page and register multiple users', () => {
            cy.contains('a', 'Register now').click();
            cy.get('[data-test="email"]').type(users.email)
            cy.get('[data-test="fullName"]').type(users.fullName)
            cy.get('[data-test="registerUserName"]').type(users.userName)
            cy.get('[data-test="registerPassword"').type(users.password)
            cy.wait(5000)
            cy.get('body').then(($body) => {
                if ($body.text().includes('User available')) {
                    cy.contains('button', 'Register').click()
                } else {
                    cy.contains('Please, login!').click()
                }
            })
        })
    })
})