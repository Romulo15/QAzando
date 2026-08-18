/// <reference types="cypress" />

describe("Agendamento", () => {

  it('Realizar agendamento', () => {
    //Request
    cy.request({
        method: "POST",
        url: "https://restful-booker.herokuapp.com/booking",
        body: {
            
            "firstname": "Roms",
            "lastname": "Cint",
            "totalprice": 1509,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-01-12",
                "checkout": "2026-01-13"
            },
            "additionalneeds": "Spicy food"
        },
              
    }).then((resultado) => {  //Validação
        expect(resultado.status).to.equal(200);
    });
 });

});