import itemCounter from './itemCounter.js';

document.body.innerHTML = '<main class="Shows"></main>';
const frontmoviez = document.querySelector('.Shows');

test('0 items in the list', () => {
  frontmoviez.innerHTML = '';
  expect(itemCounter()).toBe(0);
});

test('5 items in the list', () => {
  frontmoviez.innerHTML = `<div><h2 class="movie-title">1</h2></div>
  <div><h2 class="movie-title">2</h2></div>
  <div><h2 class="movie-title">3</h2></div>
  <div><h2 class="movie-title">4</h2></div>
  <div><h2 class="movie-title">5</h2></div>`;
  expect(itemCounter()).toBe(5);
});
