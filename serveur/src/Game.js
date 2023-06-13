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

    // Add list of genre into this.genres
    addGenres(genreList = {Array}) {
        genreList.forEach(genre => {
            if (!this.genres.find(genre => genre.id === id)) {
                this.genres.push(genre.id);
            }
        });
    }

    // Update editor  
    updateEditor(editor = {Object}){
        this.editor = editor;
    }

    // Update developer  
    updateDeveloper(developer = {Object}){
        this.developer = developer;
    }
}