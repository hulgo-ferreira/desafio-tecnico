
Cypress.Commands.add('getFilmes', (filmeId = '') => {
    const url = filmeId ? `films/${filmeId}` : 'films/';
    
    return cy.api({
      url,
      method: 'GET',
      failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('getPeople', (peopleId = '') => {
    const url = peopleId ? `people/${peopleId}` : 'people/';

    return cy.api({
        url,
        method: 'GET',
        failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('validarPersonagemFilmes', (personagemResponse, movieUrls) => {
    //Aqui estou extraindo a lista de filmes do corpo da resposta do personagem
    const filmesParticipados = personagemResponse.body.films;

    //verifico se 'filmesParticipados' é um array
    expect(filmesParticipados).to.be.an('array');

    //Verifico se cada url fornecida está presente em filmesParticipados utilizando o forEach
    movieUrls.forEach((movieUrl) => {
        expect(filmesParticipados).to.include(movieUrl);
    })
})