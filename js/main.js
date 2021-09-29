// eslint-disable-next-line no-unused-vars
function getRandomInt(min, max) {
  if (min < 0|| max < 0) {
    throw new alert('Эти значения должны быть выше нуля');
  }

  if (max < min) {
    const exchange = min;
    min = max;
    max = exchange;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// eslint-disable-next-line no-unused-vars
function checkLength( string, maxLexngth){
  const currentStringLength = string.split('').length;
  if (currentStringLength> maxLexngth) {
    return false;}
  return true;
}
