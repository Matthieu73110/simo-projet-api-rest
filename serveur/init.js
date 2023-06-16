// 'use strict';

const DeveloperData = require('./data/developers.json');
const GameData = require('./data/games.json');
const EditorData = require('./data/editors.json');
const GenderData = require('./data/genders.json');
const PlatformData = require('./data/platforms.json');

const Developer = require('./src/Developer.js');
const Game = require('./src/Game.js');
const Editor = require('./src/Editor.js');
const Gender = require('./src/Gender.js');
const Platform = require('./src/Platform.js');

class Model {
  constructor() {
   // faire l'initialisation ici du catalogue
    const developers = DeveloperData.map(data => new Developer(data));
    const games = GameData.map(data => new Game(data));
    const editors = EditorData.map(data => new Editor(data));
    const genders = GenderData.map(data => new Gender(data));
    const platforms = PlatformData.map(data => new Platform(data));
      
    const catalogue = [];

    // Loading data into classes
  
    // Creating link between Game and other classes
    games.forEach(game => {
  
      // Load developers
      let randomNumberDevelopers = Math.round(Math.random()*developers.length);
      const developer = developers.find(dev => dev.id === randomNumberDevelopers);
      game.updateDeveloper(developer);

      // Load editors
      let randomNumberEditors = Math.round(Math.random()*editors.length);
      const editor = editors.find(editor => editor.id === randomNumberEditors);
      game.updateEditor(editor);

      // Load genders
      let randomNumberGenders = Math.round(Math.random()*genders.length);
      let genderList = [];
      for (let i = 0; i < randomNumberGenders; i++) {
        let randomGender = Math.round(Math.random()*genders.length);
        genderList.push(genders[randomGender]);
      }
      game.addGenders(genderList);

      // Load platforms
      let randomNumberPlatforms = Math.round(Math.random()*platforms.length);
      let platformList = [];
      for (let i = 0; i < randomNumberPlatforms; i++) {
        let randomPlatform = Math.round(Math.random()*platforms.length);
        platformList.push(platforms[randomPlatform]);
      }
      game.addGenders(platformList);
    
    });
  
    catalogue.push(developers);
    catalogue.push(games);
    catalogue.push(editors);
    catalogue.push(genders);
    catalogue.push(platforms);
  
    console.log(catalogue);
  
    return catalogue;
  }

  getGames(){
    return catalogue[1];
  }
  
  getDeveloppers(){
    return catalogue[0];
  }
  
  getEditors(){
    return catalogue[2];
  }
  
  getGenders(){
    return catalogue[3];
  }
  
  getPlatforms(){
    return catalogue[45];
  }
}

const model = new Model();

module.exports = model;