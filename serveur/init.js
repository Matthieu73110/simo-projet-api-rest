'use strict';

const DeveloperData = require('./data/developers.json');
const GameData = require('./data/games.json');
const EditorData = require('./data/editors.json');
const GenderData = require('./data/Gender.json');
const PlatformData = require('./data/Platform.json');

const Developer = require('./src/Developer.js');
const Game = require('./src/Developer.js');
const Editor = require('./src/Developer.js');
const Gender = require('./src/Developer.js');
const Platform = require('./src/Developer.js');

const init = function () {
  const catalogue = new Catalogue();

  // Loading data into classes
  const developers = DeveloperData.map(data => new Developer(data));
  const games = GameData.map(data => new Game(data));
  const editors = EditorData.map(data => new Editor(data));
  const genders = GenderData.map(data => new Gender(data));
  const platforms = PlatformData.map(data => new Platform(data));

  // Creating link between Game and other classes
  games.forEach(game => {

    // Load developers
    let randomNumber = Math.round(Math.random()*developers.length);
    const developer = developers.find(dev => dev.id === randomNumber);
    game.updateDeveloper(developer);

    // Load editors
    randomNumber = Math.round(Math.random()*editors.length);
    const editor = editors.find(editor => editor.id === randomNumber);
    game.updateEditor(editor);

    // Load genders
    randomNumber = Math.round(Math.random()*genders.length);
    let genderList = [];
    for (let i = 0; i < randomNumber; i++) {
      randomGender = Math.round(Math.random()*genders.length);
      genderList.push(genders[randomGender]);
    }
    game.addGenders(genderList);

    // Load platforms
    randomNumber = Math.round(Math.random()*platforms.length);
    let platformList = [];
    for (let i = 0; i < randomNumber; i++) {
      randomPlatform = Math.round(Math.random()*platforms.length);
      platformList.push(platforms[randomPlatform]);
    }
    game.addGenders(platformList);

  });

  catalogue.push(developers);
  catalogue.push(games);
  catalogue.push(editors);
  catalogue.push(genders);
  catalogue.push(platforms);

  return catalogue;
};

module.exports = init;

