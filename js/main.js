// Фиксированные данные

const TYPES = [
    'palace',
    'flat',
    'house',
    'bungalow',
    'hotel'
];

const CHECKIN = [
    '12:00',
    '13:00',
    '14:00'
];

const CHECKOUT = [
    '12:00',
    '13:00',
    '14:00'
];

const FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
];

const PHOTOS = [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const QUANTITY_OBJECTS = 10;


// Функция, возвращающая значение элемента массива в рандомном порядке
// Источник: https://expange.ru/e/%D0%A1%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D1%8B%D0%B9_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82_%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0_(JavaScript)

const getArrayRandomElement = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

getArrayRandomElement(TYPES);


// Функция, возвращающая случайное целое число из переданного диапазона включительно.

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min, max) {
    if (min >= max || min < 0 || max <= 0) {
        return 'Error. Pick other numbers.';
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber(1, 7);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Источник: https://bobbyhadz.com/blog/javascript-get-random-float-in-range

function getRandomCoordinate(minDigit, maxDigit, decimals) {
    if (minDigit >= maxDigit || minDigit < 0 || maxDigit <= 0) {
        return 'Error. Pick other numbers.';
    }
    const coordinate = Math.random() * (maxDigit - minDigit) + minDigit;
    return parseFloat(coordinate.toFixed(decimals));
};

getRandomCoordinate(2, 4, 6);


// Функция, задающая номер для адреса изображения (avatar)
// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function getRandomNumber(min, max) {
    if (min >= max || min < 0 || max <= 0) {
        return 'Error. Pick other numbers.';
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumberAvatar = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomNumberAvatar < 10) {
        randomNumberAvatar = String(randomNumberAvatar).padStart(2, '0');
    }
    return randomNumberAvatar;
}


// Функция, генерирующая одно объявление (объект) со случайным содержимым.
//Источник: частично из демонстрации и лайва раздела 4 "Встроенные объекты и функции".

const getListing = () => ({
    author: {
        avatar: 'img/avatars/user' + getRandomNumber(1, 10) + '.png',
    }, // трудности с реализацией неповторяемости номеров
    offer: {
        title: 'Заголовок объявления',
        address: String(getRandomCoordinate(35.65000, 35.70000, 5)) + ',' + String(getRandomCoordinate(35.65000, 35.70000, 5)), // тут тоже трудности, написала как смогла, чтобы хотя бы работало
        price: getRandomNumber(1, 50000),
        type: getArrayRandomElement(TYPES),
        rooms: getRandomNumber(1, 10),
        guests: getRandomNumber(1, 10),
        checkin: getArrayRandomElement(CHECKIN),
        checkout: getArrayRandomElement(CHECKOUT),
        features: getArrayRandomElement(FEATURES),
        description: 'Описание номера',
        photos: getArrayRandomElement(PHOTOS),
    },
    location: {  // готово
        lat: getRandomCoordinate(35.65000, 35.70000, 5),
        lng: getRandomCoordinate(139.70000, 139.80000, 5),
    }
});

getListing();


//Генерация массива из 10 объявлений (объектов) со случайным содержимым. 
//Источник: https://up.htmlacademy.ru/profession/react/9/javascript/25/demos/6301#13

const arrayRandomListings = Array.from({ length: QUANTITY_OBJECTS }, getListing);

function getNewRandomListings(getArrayListings) {
    return getArrayListings;
};
getNewRandomListings(arrayRandomListings);
