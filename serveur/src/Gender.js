class Gender{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.games = [];
    }

    addGame(game){
        this.games.push(game);
    }

    getGames(){
        return this.games;
    }

    getGame(id){
        return this.games.find(game => game.id === id);
    }
}
