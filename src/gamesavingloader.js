import read from './reader.js';
import json from './parser.js';
import gameSaving from './gamesaving.js';

export default class GameSavingLoader {
  
    static load() {
      return new Promise ((resolve, reject) => {
        read()
        .then(data => json(data))
        .then(result => resolve(new gameSaving(JSON.parse(result))))
        .catch(e => reject(e));
      })    
    }
  }

  