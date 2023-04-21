import GameSavingLoader from "./gamesavingloader.js";

async function saveGame(){
  return GameSavingLoader.load().then((saving) => {
  console.log(JSON.stringify(saving));
  return saving;
}, (error) => {
  console.log('ERROR: '+ error);
});
}

saveGame();

