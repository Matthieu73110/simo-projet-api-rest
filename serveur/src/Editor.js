class Editor {
    constructor(data = {}) {
      this.id = data.id;
      this.name = data.name;
      this.address = data.address;
      this.acronym = data.acronym;
      this.games = []; 
    }

    addGame(game) {
        this.games.push(game);
    }

    getGames(){
        return this.games;
    }

    getGame(id){
        return this.games.find(game => game.id === id);
    }
}