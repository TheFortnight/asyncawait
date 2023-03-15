import GameSavingLoader from "./gamesaving.js";

async function saveGame(){
  try {
    let result = await GameSavingLoader.load();
    result = JSON.parse(result);
    return result;
  } catch(e) {
    console.log(e.message);
  } 
}

saveGame();