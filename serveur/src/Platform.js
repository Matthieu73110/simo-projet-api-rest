'use strict';

class Platform {
    constructor(data = {Object}) {
        this.id = data.id;
        this.name = data.name;
        this.games = [];
    }

    // Add a game to the platform
    addGame(game){
        this.games.push(game);
    }

    // Return a game if found, false if not found
    getGameById(idGame){
        this.games.forEach(game => {
            if (game.id === idGame) {
                return game;
            }
        });
        return false;
    }
    // Modify the game associed plateform
    modifyGame(body, id_game){
        if (!this.games.includes(id_game)){
            return false;
        }

        game = this.getGameById(id_game);
        
        game.name = body.name;
    }
}