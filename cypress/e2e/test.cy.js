describe(
    'Testing WordPress', () => {
        it(
        'passes', () => {
                cy.visit('localhost:8181');
                cy.contains('Blog').click();
                cy.url().should('include', '/sample-page/');
        } 
    );
    } 
);
