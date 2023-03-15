import GameSavingLoader from "../src/gamesaving";


test('success', () => {
    GameSavingLoader.load().then((saving) => {
        const savingObj = JSON.parse(saving);
        const sample = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}};
        expect(savingObj).toEqual(sample);
       // saving объект класса GameSaving
      }, (error) => {
        console.log(error.message);
      });
  });

  test('read error', () => {
    GameSavingLoader.load().then((saving) => {
        const savingObj = JSON.parse(saving);
      }, (error) => {
        console.log(error.message);
        expect(error.message).toEqual('cant read');
      });
  });

  test('parse error', () => {
    GameSavingLoader.load().then((saving) => {
        const savingObj = JSON.parse(saving);
      }, (error) => {
        console.log(error.message);
        expect(error.message).toEqual('cant parse');
      });
  });