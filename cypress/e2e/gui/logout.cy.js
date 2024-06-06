describe('Logout', function() {
    beforeEach( function() {
            cy.login()  
            cy.visit('/')     
       
    })
        
    it('Logout com sucesso', function() {
    
      cy.logout()
      cy.url().should('be.equal', 'http://localhost/users/sign_in')
    })
  })