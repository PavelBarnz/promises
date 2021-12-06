// eslint-disable-next-line import/extensions
import read from './reader.js';
// eslint-disable-next-line import/extensions
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data.then((response) => json(response)).then((response) => {
        resolve(JSON.parse(response));
      });
    });
  }
}
