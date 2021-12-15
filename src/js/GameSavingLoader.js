// eslint-disable-next-line import/extensions
import read from './reader.js';
// eslint-disable-next-line import/extensions
import json from './parser.js';
// eslint-disable-next-line import/extensions
import GameSavng from './GameSaving.js';


export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((result) => new GameSavng(JSON.parse(result)));
  }
}
