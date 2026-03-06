/// <reference types="cypress"/>


describe('testes de inclusção alteração e remoção de contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('deve preencher os campos para a inserção do contato', () => {
        cy.get('input[type="text"]').first().type('Felipe Silva')
        cy.get('input[type="email"]').first().type('felipesilva@gmail.com')
        cy.get('input[type="tel"]').first().type('11 123451234')

        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk ').children().should('have.length.at.least', 4)
    })

    
    it('deve editar o contato e salvar', () => {
        cy.get('.sc-gueYoa > .edit').last().click()
        cy.get('input[type="text"]').first().clear()
        cy.get('input[type="text"]').first().type('teste')
        cy.get('input[type="email"]').first().clear()
        cy.get('input[type="email"]').first().type('test@gmail.com')
        cy.get('input[type="tel"]').first().clear()
        cy.get('input[type="tel"]').first().type('11 000000000')
        
        cy.get('.alterar').click()
    })
    
    it('deve editar o contato e cancelar', () => {
        cy.get('.sc-gueYoa > .edit').last().click()
        cy.get('input[type="text"]').first().type('Felipe Silva')
        cy.get('input[type="email"]').first().type('felipesilva@gmail.com')
        cy.get('input[type="tel"]').first().type('11 123451234')
        
        cy.get('.cancelar').click()
    })

    it('deve apagar um contato', () => {
        cy.get('.sc-gueYoa > .delete').last().click()
    })
})