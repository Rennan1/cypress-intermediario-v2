import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }
describe('Criação de Projeto', options, function() {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login() // pré condição
  })

  it('Projeto criado com sucesso', function () {
    const project = {
      name: `project-${faker.datatype.uuid()}`, // concatenação de string com comando em js utilizando ${comandoaqui}, nesse caso temos a string project concatenado com um uuid aleatório do faker
      description: faker.random.words(5) // a descrição será composta por 5 palavras aleatórias geradas pelo faker
    }

    cy.gui_createProject(project) // ação

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`) // resultados esperados
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})