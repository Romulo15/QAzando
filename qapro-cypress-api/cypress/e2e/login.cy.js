/// <reference types="cypress" />

describe("Login", () => {

  it('Login com sucesso', () => {
    //Request
    cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/auth",
        body: {
            user: "admin",
            password: "password123",
        },      
    }).then((resultado) => {  //Validação
        expect(resultado.status).to.equal(200);
       expect(resultado.body.reason).not.to.empty;
    });
 });

it('Login com senha incorreta', () => {
    //Request
    cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/auth",
        body: {
            user: "admin",
            password: "123",
        },      
    }).then((resultado) => {  
        expect(resultado.status).to.equal(200);
        expect(resultado.body.reason).to.equal("Bad credentials");
    });
 });

it('Login com email incorreto', () => {
    //Request
    cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/auth",
        body: {
            user: "123",
            password: "123",
        },      
    }).then((resultado) => {  
        expect(resultado.status).to.equal(200);
        expect(resultado.body.reason).to.equal("Bad credentials");
    });
 });


});