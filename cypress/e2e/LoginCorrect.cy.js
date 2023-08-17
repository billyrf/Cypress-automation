describe('Testing login  on cypress alurapic page', () => {
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
  })
  it('Visit alura pic page and try to login', () => {
    cy.login('qaabilly1', 12345678)
  })
})