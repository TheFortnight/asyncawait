import GameSavingLoader from "../src/gamesavingloader";


test('success', () => {
    GameSavingLoader.load().then((saving) => {
        const savingObj = JSON.parse(saving);
        const sample = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}};
        expect(savingObj).toEqual(sample);
       // saving объект класса GameSaving
      });
  });

  test('read error', () => {
    GameSavingLoader.load = jest.fn().mockRejectedValue(new Error("can't read"));
    GameSavingLoader.load().then((saving) => {
        const savingObj = JSON.parse(saving);
      }, (error) => {
        expect(error.message).toEqual("can't read");
      });
  });

  test('parse error', () => {
    GameSavingLoader.load = jest.fn().mockRejectedValue(new Error("can't parse"));
    GameSavingLoader.load().then((saving) => {
        const savingObj = JSON.parse(saving);
      }, (error) => {
        expect(error.message).toEqual("can't parse");
      });
  });