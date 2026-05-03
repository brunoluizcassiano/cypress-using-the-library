import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CadastrarListaControle from './cadastrarListaController';
const cadastrarListaControle = new CadastrarListaControle;

Given("que estamos no fluxo de cadastro de lista no meu board", () => {
    cadastrarListaControle.realizarCadastramentoNovaLista();
})

When("realizo o cadastramento de uma nova lista no board", () => {
    cadastrarListaControle.validarStatusCode();
})

Then("deve-se validar o id e o nome da nova lista cadastrada", () => {
    cy.log('Then');
})