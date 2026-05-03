Feature: Trello

    @coe @idCenarioZephyr1 @idHistoria @funcionalidade @rest @regressivo @massa @identificacao
    Scenario: Cadastrar uma nova lista no meu board
        Given que estamos no fluxo de cadastro de lista no meu board
        When realizo o cadastramento de uma nova lista no board
        Then deve-se validar o id e o nome da nova lista cadastrada