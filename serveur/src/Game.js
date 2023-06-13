'use strict';

class Game {
    constructor(data = {Object}, platforms = {Array}) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.releaseDate = data.release_date;
        this.sellNb = data.sell_nb;
        this.rates = data.rates;
        this.developer = null;
        this.editor = null;
        this.genres = [];
        this.addPlatform(platforms);
    }

    // Add a platform for this game
    addPlatform(platformIdList = {Array}) {
        this.platforms = platformIdList;
    }

    //
    addGenres() {
        
    }
}