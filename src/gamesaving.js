import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
    static async load() {
      const data = await read()
      .catch(()=> {
        throw new Error('cant read'); // возвращается Promise!
      });
      const value = await json(data)
      .catch(()=> {
        throw new Error('cant parse'); // возвращается Promise!
      });
      return value;
    }
  }