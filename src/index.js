// eslint-disable-next-line import/extensions
import read from './js/reader.js';
// eslint-disable-next-line import/extensions
import json from './js/parser.js';

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

GameSavingLoader.load().then((response) => {
  // eslint-disable-next-line no-unused-vars
  const result = response;
});
