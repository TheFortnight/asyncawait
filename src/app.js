import GameSavingLoader from "./gamesavingloader.js";

async function saveGame(){
  return new Promise ((resolve, reject) => {
    try {
      GameSavingLoader.load()
      .then((result)=>{
        console.log(result);
        resolve(result);        
      })
      .catch((err) => {
        reject(err);
      });
    } catch(e) {
      console.log(e.message);
    }
  });
}

saveGame();