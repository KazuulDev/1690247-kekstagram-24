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
function checkLength(string, maxLexngth){
  const currentStringLength = string.split('').length;
  if (currentStringLength> maxLexngth) {
    return false;}
  return true;
}


{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'UГладислав',
}


const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Гладислав',
  'Вездессун',
  'Вкусеслав',
  'Куселют',
  'Пузеслав',
  'Хвостосмысл',
  'Кусихвост',
  'Медолап',
  'Мясополк',
  'Жирополк',
  'Мечижор',
  'Шерстиком',
  'Ярожор',
  'Ярокус',
  'Яроцап',
  'Наглохват',
  'Лютодрав'
];

function autoFiller () {
  for (let i = 0; i < 1; i++) {}
}
console.log (autoFiller(0))
