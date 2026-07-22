///<reference types="cypress"/>//Comandos básicos de teste de login utilizando Cypress

//Funcionalidade
describe("Login", () => {
  //Cenário 1 - Login com sucesso
  //Acessar a página de login
  //Preencher o campo de email e senha
  //Clicar no botão de login
  //Verificar se o login foi bem-sucedido (ex: verificar se a página de dashboard é exibida)

  it("Login com sucesso", () => {
    cy.visit("https://automationpratice.com.br/login"); //Acessar a página de login
    cy.get("#user").type("romulocintra1@gmail.com");
    cy.get("#password").type("12345678");
    cy.get("#btnLogin").click();
  });

  it("Validar um elemento", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get("#createAccount").should("be.visible").should("have.text", "Ainda não tem conta?");
  });

  it.only("Mensagem de email obrigatório", () => {
    cy.visit("https://automationpratice.com.br/login");
    cy.get('#user').type("teste");
    cy.get('#password').type("12345678");
    cy.get('#btnLogin').click();
    cy.get('.invalid_input').should("be.visible").should("have.text", "E-mail inválido.");
  });



});

