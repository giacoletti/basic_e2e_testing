describe('user that navigates to the application',() => {
    
    before(() => {
        cy.visit('/')
    });

    it('is expected to see "Hello World"', () => {
        cy.get('h1').should('contain.text', 'Hello World!');
        cy.get('h3').should('contain.text', 'My first test');
    });
});