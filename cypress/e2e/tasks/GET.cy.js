
//Cenário de teste 1 - Validar o formato da request
describe("GET /films/?format=json", () => {
  it.only("Validar o formato da request", () => {
    const formatoJson = "?format=json";

    cy.getFilmes(formatoJson).then((response) => {
      expect(response.status).to.eq(200);

      //verifico se o corpo da resposta é um JSON válido
      expect(response.body).to.be.a("object");

      expect(response.body).to.have.property("count");
      expect(response.body).to.have.property("results").that.is.an("array");
    })
  })
})

//Cenário de teste 2 - Validar URL inválida
describe("GET /films/?format=jsonx", () => {
  it.only("Deve validar a URL inválida", () => {
    const invalidUrl = "?format=jsonx";

    cy.getPeople(invalidUrl).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.statusText).to.eq("Not Found");
    });
  });
});
