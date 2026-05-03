class controllerCadastrarLista{

    realizarCadastramentoNovaLista(){
        const idboard = "646483b3d1c95de8fe42f7f8";
        const key = "e385e6347369be467a41dcec9eb37945";
        const token = "daf4095434e4fd02ad302c145877c6dfa5305ac1f3c68f8a30e7627333a0b87f";

        const uri = "https://api.trello.com";
        const path = `1/lists`;
        let queryParams = { 
            'name': 'TO DO',
            'idBoard': idboard,
            'key': key,
            'token': token
        };
        cy.request({
            method: 'POST',
            url: `${uri}/${path}`,
            qs: queryParams,
            failOnStatusCode: false
        }).as('postLists');
        
    }

    validarStatusCode(){
        cy.get('@postLists').then(response => {
            expect(response.status).to.eq(200)
        })
    }

    validarCadastramentoNovaLista(){

    }

}

export default controllerCadastrarLista
