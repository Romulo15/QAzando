/// <reference types="cypress" />

describe('Atualizar reserva', () => {

    let token = '';
    let bookingId = '';

    beforeEach(() => {
        // login e cria uma reserva
        return cy.login('admin', 'password123').then((resultado) => {
            token = resultado;
            return cy.request({
                method: 'POST',
                url: 'https://restful-booker.herokuapp.com/booking',
                body: {
                    firstname: 'Antes',
                    lastname: 'Teste',
                    totalprice: 100,
                    depositpaid: false,
                    bookingdates: {
                        checkin: '2026-02-01',
                        checkout: '2026-02-02'
                    },
                    additionalneeds: 'None'
                }
            }).then((res) => {
                expect(res.status).to.equal(200);
                bookingId = res.body.bookingid;
            });
        });
    });

    it('Atualiza uma reserva existente (PUT)', () => {
        const updated = {
            firstname: 'Depois',
            lastname: 'Atualizado',
            totalprice: 200,
            depositpaid: true,
            bookingdates: {
                checkin: '2026-03-01',
                checkout: '2026-03-05'
            },
            additionalneeds: 'Breakfast'
        };

        return cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                Cookie: `token=${token}`
            },
            body: updated,
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body.firstname).to.equal(updated.firstname);
            expect(res.body.lastname).to.equal(updated.lastname);
            expect(res.body.totalprice).to.equal(updated.totalprice);
        });
    });

});
