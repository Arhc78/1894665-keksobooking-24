let min = 1;
let max = 20;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }