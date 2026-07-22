describe("Login", () => {
  it("Login com sucesso", () => {
    cy.visit("https://automationpratice.com.br/my-account#!"); //Acessar a página de login
    cy.get(":nth-child(3) > .offcanvas-toggle > .fa").click();
    cy.get(":nth-child(3) > .offcanvas-toggle > .fa").click();
  });

  it("Confere opção de pagamento 1", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    cy.get('#headingOne > div > [name="payment"]').click();
    cy.get("#collapseOne > .payment_body > p")
      .should("be.visible")
      .should("have.text", "Direct Bank Transfer");
  });

  it("Confere opção de pagamento 2", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    cy.get('#headingTwo > div > [name="payment"]').click();
    cy.get("#collapseTwo > .payment_body > p")
      .should("be.visible")
      .should("have.text", "Direct Mobile Transfer");
  });

  it("Confere opção de pagamento 3", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    cy.get('#headingThree > div > [name="payment"]').click();
    cy.get("#collapseThree > .payment_body > p")
      .should("be.visible")
      .should(
        "have.text",
        "Some placeholder content for the second accordion panel. This panel is hidden by default.",
      );
  });

  it("Preencher informações de pagamento", () => {
    cy.visit("https://automationpratice.com.br/checkout-one");
    cy.get("#fname").type("Romulo");
    cy.get("#lname").type("Cintra");
    cy.get("#cname").type("Teste");
    cy.get("#email").type("testee@teste.com");
    cy.get("#country").select("usa");
    cy.get("#city").select("Aland Islands");
    cy.get("#zip").type("123456");
    cy.get("#faddress").type("Rua teste, Paraíso, 123");
    cy.get("#messages").type("Teste de mensagem");
    cy.get("#materialUnchecked").click();
    cy.get(".checkout-area-bg > .theme-btn-one").click();
    cy.get(":nth-child(2) > h3")
      .should("be.visible")
      .should("have.text", "Billings Information registred with success!");
    cy.get(":nth-child(2) > :nth-child(2) > .theme-btn-one").click();
    cy.get("h2").should("be.visible").should("have.text", "Order success!");
    cy.get(".offer_modal_left > h3").should(
      "have.text",
      "Congrats! Your order was created with sucess!",
    );
  });
});
