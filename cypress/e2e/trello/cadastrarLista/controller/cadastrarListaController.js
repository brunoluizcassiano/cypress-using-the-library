class controllerCadastrarLista{

    realizarCadastramentoNovaLista(){
        const idboard = "646483b3d1c95de8fe42f7f8";
        const key = "e385e6347369be467a41dcec9eb37945";
        const token = "daf4095434e4fd02ad302c145877c6dfa5305ac1f3c68f8a30e7627333a0b87f";

        // const uri = "https://api.trello.com/";
        // const path = `1/lists?name=TO DO&idboard=${idboard}&key=${key}&token=${token}`;
        // const fileData = "cypress/data/createList.json";

        // cy.requestRestFullFileData("cadastroList", "POST", uri, path, fileData);

        const uri = "https://api.trello.com";
        const path = `1/lists`;
        const fileData = "cypress/data/createList.json";
        let queryParams = { 
            'name': 'TO DO',
            'idBoard': idboard
        };
        let authNames = ['APIKey', 'APIToken'];
        cy.readFile('resources/authentications.json').then(resp => {
            cy.requestRestFul({
                requestAlias: "postLists",
                uri: uri,
                path: path,
                httpMethod: 'POST',
                queryParams: queryParams,
                authNames: authNames,
                authenticationsJson: resp
            });
        })
        
    }

    validarStatusCode(){
        cy.getResponseStatusCode().then(response => {
            expect(response).to.eq(200)
        })
    }

    validarCadastramentoNovaLista(){

    }

}

export default controllerCadastrarLista