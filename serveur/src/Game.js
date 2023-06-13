'use strict';
const Developer = require('./src/Developer.js');
const Editor = require('./src/Editor.js');
const Gender = require('./src/Gender.js');
const Platform = require('./src/Platform.js');

class Game {
    constructor(data = {Object}) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.releaseDate = data.release_date;
        this.sellNb = data.sell_nb;
        this.rates = data.rates;
        this.developer = null;
        this.editor = null;
        this.genders = [];
        this.platforms = [];
    }

    // Add a platform for this game
    addPlatform(platformIdList = {Array}) {
        this.platforms = platformIdList;
    }

    // Add list of gender into this.genders
    addGenders(genderList = {Array}) {
        genderList.forEach(genderAsk => {
            if (!this.genders.find(genderAsk => genderAsk.id === id)) {
                this.genders.push(gender.id);
                genderAsk.addGame(this);
            }
        });
    }

    // Update editor  
    updateEditor(editor = {Object}){
        this.editor = editor;
        editor.addGames(this);
    }

    // Update developer  
    updateDeveloper(developer = {Object}){
        this.developer = developer;
        developer.addGames(this);
    }
}