
// Cenário de teste 7 - Validar peso, altura e o filme da pessoa
describe("GET /people/2", () => {
  it("Validar o peso, altura e o filme do people C-3PO", () => {
    cy.getPeople('2')
        .then((response) => {

        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('C-3PO'); //nome da pessoa
        expect(response.body.height).to.eq('167')  //altura da pessoa
        expect(response.body.mass).to.eq('75')     //peso da pessoa

        cy.validarPersonagemFilmes(response, [
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
        ])
    })
  })
})