import read from '../js/reader.js';


test('тест функции reader', () => {
  const resultBuffer = new ArrayBuffer('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'.length * 2);
  const resultBufferView = new Uint16Array(resultBuffer);

  const pr = read();
  pr.then((response) => {
    expect(response).toEqual(resultBufferView);
  });
});