/*
 * DO NOT ALTER THIS SOURCE FILE!
 * Edit js/app.js instead
 */

(function(window) {
  const NUM_ROWS = 15;
  const RANDOM_ID_LENGTH = 10;

  const randomChar = _ => 'abcdefghijklmnopqrstuvwxyz'.split('')[Math.floor(Math.random()*26)];
  const randomID = _ => Array(RANDOM_ID_LENGTH).fill('').map(randomChar).join('');

  // set light ids to random string
  Array(NUM_ROWS).fill('').map((_,i) => i+1)
    .forEach(i =>
      document.getElementById(`will-be-replaced-${i}`).id =
      document.getElementById(`btn${i}`).dataset.lightId = randomID()
    );

}(window));
