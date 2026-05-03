import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastrarListaController from '../controller/cadastrarListaController';

const cadastrarListaController = new CadastrarListaController();

Given("que estamos no fluxo de cadastro de lista no meu board", () => {
    cadastrarListaController.realizarCadastramentoNovaLista();
})

When("realizo o cadastramento de uma nova lista no board", () => {
    cadastrarListaController.validarStatusCode();
})

Then("deve-se validar o id e o nome da nova lista cadastrada", () => {
    cy.log('Then');
})
