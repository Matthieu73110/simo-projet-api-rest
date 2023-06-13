class Developer {
    constructor(data={}) {
        this.id = data.id;
        this.name = data.name;
        this.games = [];
    }

    addGame(game) {
        this.games.push(game);
    }

    getGames() {
        return this.games;
    }

    getGameById(id) {
        return this.games.find(game => game.id === id);
    }

}

