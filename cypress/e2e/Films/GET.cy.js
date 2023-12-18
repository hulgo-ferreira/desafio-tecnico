// Cenário de teste 8 - Listar todos os filmes
describe('GET /films', () => {
  it('Listar todos os filmes', () => {
    cy.getFilmes()
      .then(response => {
        expect(response.status).to.eq(200)
      })
  })
})

// Cenário de teste 3 - Validar se o filme 10 é válido e qual o tipo de retorno
describe('GET /films/10', () => {
  it('Validar se filme 10 é válido e qual o seu retorno', () => {
    cy.getFilmes('10')
      .then(response => {
        expect(response.status).to.eq(404)
        expect(response.statusText).to.eq('Not Found')
    })
  })
})

// Cenário de teste 4 - Validar nome correto do filme
describe('GET /films', () => {
  it('Deve validar o nome correto do episódio do filme', () => {
    const episodioIdEsperado = 4;

    cy.getFilmes()
      .then(response => {
      expect(response.status).to.eq(200)

      //encontro o filme desejado pelo episode_id
      const filmeEsperado = response.body.results.find((filme) =>
        filme.episode_id == episodioIdEsperado
      )
      //verifico se o filme foi encontrado na lista de filmes
      expect(filmeEsperado).to.exist;

      //obtenho o nome do episódio apartir do filme encontrado
      const expectedNomeEpisodio = filmeEsperado.title;

      //verifico se o nome do episódio retornado pela API é o esperado
      expect(expectedNomeEpisodio).to.not.be.empty;
    })
  })
})

// Cenário de teste 5 - Validar ID do episódio e o tipo do dado
describe('GET /films', () => {
  it('Deve validar o ID do episódio e o tipo do dado está correto', () => {
    const episodioIdEsperado = 4;

    let filmeEsperado;

    cy.getFilmes()
      .then(response => {
        expect(response.status).to.eq(200)

      filmeEsperado = response.body.results.find((filme) => 
        filme.episode_id == episodioIdEsperado);

      expect(filmeEsperado).to.exist;
      expect(filmeEsperado.episode_id).to.be.a('number');
      expect(filmeEsperado.episode_id).to.eq(episodioIdEsperado);
    })
  })
})

// Cenário de teste 6 - Validar formato de data válida
describe('GET /films', () => {
  it('Validar formato de data válida (padrão americano) ou Brasil', () => {
    validarFormatoData(4);
  })
})

function validarFormatoData(episodioId) {
  cy.getFilmes(episodioId)
      .then(response => {
        const filmeEsperado = response.body; 
        
    //Verificar se o filme foi encontrado na lista de filmes
    expect(filmeEsperado).to.exist;

    //Obter a data de lançamento do episódio
    const releaseDate = filmeEsperado.release_date;
    cy.log('Data: ' + releaseDate);

    //Verificar se a data está no formato americano (YYY-MM-DD)
    expect(validarFormatoAmericano(releaseDate)).to.be.true;

    //verificar se a data não está no formato brasileiro
    expect(validarFormatoBrasileiro(releaseDate)).to.be.false;

    cy.log('A data ' + releaseDate + ' está no formato americano (YYY-MM-DD)');
  })
}

function validarFormatoAmericano(dataString) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dataString);
}

function validarFormatoBrasileiro(dataString) {
  return /^\d{2}-\d{2}-\d{4}$/.test(dataString);
}

