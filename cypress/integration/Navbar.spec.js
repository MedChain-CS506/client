describe('Navbar test', function() {
    it('tests that sign up click opens popup', function() {
      cy.visit("http://localhost:3000/")
      cy.get("#sign-up-button").click()
      cy.get("#sign-up-dialog").contains("Sign up for an account")
    })

    it('tests that sign in click opens popup', function() {
        cy.visit("http://localhost:3000/")
        cy.get("#sign-in-button").click()
        cy.get("#sign-in-dialog").contains("Sign in")
      })

    // it('tests input for sign up popup', function() {
    //     cy.visit("http://localhost:3000/")
    //     cy.get("#sign-up-button").click()
    //     cy.get("#sign-up-dialog").contains("Sign up for an account")
    //   })
  })
