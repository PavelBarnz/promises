// eslint-disable-next-line import/extensions
import read from './reader.js';
// eslint-disable-next-line import/extensions
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data.then((response) => {
        const stringData = json(response);
        // eslint-disable-next-line no-shadow
        stringData.then((response) => {
          const gameSaving = JSON.parse(response);
          resolve(gameSaving);
        });
      });
    });
  }
}