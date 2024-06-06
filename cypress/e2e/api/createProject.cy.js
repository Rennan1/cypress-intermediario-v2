import { faker } from '@faker-js/faker'

describe('Create Project', () => {
    beforeEach( function() {
        cy.api_deleteProjects()})  // sempre antes de criar um projeto, limpar os outros já existentes
        
   

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.api_createProject(project)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
      })
  })
})

