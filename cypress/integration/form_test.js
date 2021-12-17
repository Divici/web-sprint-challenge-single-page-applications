describe('Pizza Order App', ()=>{

    beforeEach( ()=> {
        cy.visit('http://localhost:3000/pizza')
    })

    //Helpers to grab elements
    const nameInput = () => cy.get('input[name=name]');
    const sizeSelect = () => cy.get('select[name=size]');
    const pepperoniCheck = () => cy.get('input[name=pepperoni]');
    const sausageCheck = () => cy.get('input[name=sausage]');
    const onionsCheck = () => cy.get('input[name=onions]');
    const baconCheck = () => cy.get('input[name=bacon]');
    const specialInput = () => cy.get('input[name=special]');
    const orderBtn = () => cy.get('button[id="order-button"]');

    it('the proper elements are showing', () => {
        nameInput().should('exist');
        sizeSelect().should('exist');
        pepperoniCheck().should('exist');
        sausageCheck().should('exist');
        onionsCheck().should('exist');
        baconCheck().should('exist');
        specialInput().should('exist');
        orderBtn().should('exist');
    })

    describe('Adding text to boxes', ()=>{

        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('order button starts out disabled', () => {
            orderBtn().should('be.disabled');
        })

        it('can enter text in text inputs', ()=>{
            nameInput()
                .should('have.value', '')
                .type('Daniel Salazar')
                .should('have.value', 'Daniel Salazar')

            specialInput()
                .should('have.value', '')
                .type('Please deliver to my apt')
                .should('have.value', 'Please deliver to my apt')
        })
    })

    describe('Selecting multiple toppings', ()=>{

        it('can check the TOS box', ()=>{
            pepperoniCheck()
                .should('not.be.checked')
                .check()
                .should('be.checked')

            sausageCheck()
                .should('not.be.checked')
                .check()
                .should('be.checked')

            onionsCheck()
                .should('not.be.checked')
                .check()
                .should('be.checked')

            baconCheck()
                .should('not.be.checked')
                .check()
                .should('be.checked')
        })
    })

    describe('Submitting a new order', () => {
        it('the user can not submit the form if name and size are not filled in', () => {
            nameInput().type('David Aihe');
            orderBtn().should('be.disabled');
        })

        it('the user can submit the form data', () => {
            nameInput().type('Daniel Salazar');
            sizeSelect().select('Small')
            baconCheck().check()
            orderBtn().should('not.be.disabled');
            orderBtn().click();
        })
    })


})