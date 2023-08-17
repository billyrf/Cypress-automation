describe('Testing login  on cypress alurapic page', () => {
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')

    cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
      statusCode: 400
    }).as('stubPost')
  })
  it('Visit alura pic page and try the login without fields', () => {
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })

  it('Falhar mesmo com os campos preenchidos corretamente(teste do popup)', () => {
    cy.login('qaabilly1', 12345678)
    cy.wait('@stubPost')
  })

})