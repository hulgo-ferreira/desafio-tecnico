<img align="right" width="350" src="https://www.cypress.io/cypress_logo_social.png"/>

# Automação da API Stars Wars com Cypress!👋

## Preparação do ambiente

- Instalações:
  - Visual Studio Code: https://code.visualstudio.com/download
  - Nodejs: https://nodejs.org/en/download
- Comandos para preparação do ambiente:
  - npm é um gerenciador de pacotes node
     - npm init --yes
  - Realiza a instalação do cypress como dependência de desenvolvimento
     - npm install cypress -D
  - Estrutura as pastas no projeto e abre a interface do cypress pela primeira vez
     - npx cypress open
  - Executa o projeto no modo headless, ou seja, sem abrir a interface gráfica do navegador durante a execução
     - npx cypress run
- Como instalar todos os pacotes de dependência do projeto?
  - npm install

## Dependências do projeto:

- No arquivo package-lock.json, existem várias dependências que foram utilizadas durante a criação do projeto como por exemplo:
  - Dependência responsável por imprimir as informações sobre a chamada de API na UI do aplicativo Cypress, como se fosse a interface gráfica do POSTMAN
     - cypress-plugin-api: é possível 
