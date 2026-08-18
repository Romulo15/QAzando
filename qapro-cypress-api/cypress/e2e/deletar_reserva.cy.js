/// <reference types="cypress" />

describe("Agendamento", () => {

    let token = ''
    let bookingId = ''

    beforeEach(() => {
        // Faz login e cria uma reserva para cada teste
        return cy.login('admin', 'password123').then((resultado) => {
            token = resultado;
            return cy.request({
                method: "POST",
                url: "https://restful-booker.herokuapp.com/booking",
                body: {
                    firstname: "Roms",
                    lastname: "Cint",
                    totalprice: 1509,
                    depositpaid: true,
                    bookingdates: {
                        checkin: "2026-01-12",
                        checkout: "2026-01-13"
                    },
                    additionalneeds: "Spicy food"
                },
            }).then((resultado) => {
                expect(resultado.status).to.equal(200);
                bookingId = resultado.body.bookingid;
            });
        });
    });

    it('Realizar agendamento', () => {
        expect(bookingId).to.exist;
    });

    it('Deletar reserva', () => {
        return cy.request({
            method: "DELETE",
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                Cookie: `token=${token}`,
            },
            failOnStatusCode: false,
        }).then((resultado) => {
            expect(resultado.status).to.equal(201);
        });
    });

    it('Deletar reserva sem estar logado', () => {
        return cy.request({
            method: "DELETE",
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            failOnStatusCode: false,
        }).then((resultado) => {
            expect(resultado.status).to.equal(403);
        });
    });

});


