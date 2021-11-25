import GameSavingLoader from "./GameSavingLoader.js";

GameSavingLoader.load().then((response) => {
    // eslint-disable-next-line no-unused-vars
    const result = response;
    console.log(result)
  });