describe('Testing API Alurapic', () => {
    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    })
    it('Api data', () => {
        cy.request({
            method: 'POST',
            url: 'https://alurapic-api.onrender.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(64)
        })
    })

    it('User Photos', () => {
        const expectedTime = Math.random() * 500
        cy.request({
            method: 'GET',
            url: 'https://alurapic-api.onrender.com/qaabilly1/photos?',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Capivara')
            expect(res.duration).to.be.lte(expectedTime)
        })
    })
})