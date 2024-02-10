//Завдання 1
// Оригінальна функція, яка повертає Promise.
function fetchFakeData() {
  const fakeData = {
    name: "John",
    age: 30,
  };
  return Promise.resolve(fakeData);
}
// Створюємо асинхронну функцію getData, яка використовує await для обробки Promise.
async function getData() {
  // Використовуємо try для обробки помилок
  try {
    // Використовуємо await для очікування виконання Promise.
    const fakeData = await fetchFakeData();
    // Дані виводимо в консоль після отримання їх з Promise.
    console.log("Завдання: 1 ==============================");
    console.log(fakeData);
    // Використовуємо catch для обробки будь-яких помилок, що виникли під час виконання Promise, та виводимо їх в консоль.
  } catch (error) {
    console.log(error);
  }
}

// Розкоментуйте після виконання завдання
console.log("Завдання: 1 ==============================");
// // Викликаємо нашу асинхронну функцію.
getData();

//Завдання 2
// Функція getRandomNumberAfterSeconds, яка приймає один параметр - число секунд.
function getRandomNumberAfterSeconds(seconds) {
  // Повертаємо новий Promise
  return new Promise((resolve) => {
    // Використовуємо setTimeout для симуляції асинхронної операції.
    // Після "seconds" секунд, Promise буде виконано з результатом виконання функціх Math.random
    setTimeout(() => {
      resolve(Math.random());
    }, seconds * 1000);
  });
}
// Асинхронна функція logRandomNumberAfterSeconds, яка приймає один параметр - число секунд
async function logRandomNumberAfterSeconds(seconds) {
  // Використовуємо try для обробки помилок
  // Використовуємо await, щоб "почекати", поки Promise від getRandomNumberAfterSeconds буде виконано.
  // В функцію потрібно передати в seconds в якості аргументу
  // Результат виконання функції присвоюється константі randomNumber.
  // Виводимо отримане випадкове число в консоль
  // Якщо сталася помилка під час виконання Promise, виводимо її в консоль.
  try {
    const randomNumber = await getRandomNumberAfterSeconds(seconds);
    console.log("Завдання: 2 ==============================");
    console.log(randomNumber);
  } catch (error) {
    console.log(error);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 2 ==============================");
logRandomNumberAfterSeconds();

//Завдання 3
// Асинхронна функція getDataFromUrl, яка приймає один параметр - URL
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки GET-запиту на вказаний URL
// Перевіряємо через властивість ok, чи є відповідь вдалою якщо ні виводимо помилку в консоль
// Конвертуємо відповідь у формат JSON
// Виводимо дані в консоль
// Виводимо помилки в консоль якщо вони є
async function getDataFromUrl(url) {
  try {
    const answer = await fetch(url, { method: "GET" });
    console.log("Завдання: 3 ==============================");
    if (!answer.ok) {
      throw new Error(`Не вдалося отримати дані.Статус: ${answer.status}`);
    }
    const result = await answer.json();
    console.log("Data:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// Розкоментуйте після виконання завданння
console.log("Завдання: 3 ==============================");
getDataFromUrl("https://swapi.dev/api/people/1");

//Завдання 4
// Асинхронна функція, яка приймає три параметри - URL, дані для відправки та токен авторизації, маємо аргумент url, data, authToken
// Використовуємо try для обробки помилок
// Використовуємо fetch для відправки POST-запиту на вказаний URL
// Вказуємо метод запиту POST в конфігурацію параметрів запиту
// Вказуємо заголовок (header) "Content-Type" зі значенням "application/json"
// Вказуємо заголовок Authorization в який передаємо authToken
// Передаємо дані data в body, які перед цим перетворились в JSON
// Перевіряємо через властивість ok, чи є відповідь вдалою
// Конвертуємо відповідь у формат JSON
// Виводимо відповідь в консоль
// Виводимо помилки в консоль якщо вони є
async function postDataWithAuth(url, data, authToken) {
  try {
    const answer = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify(data),
    });

    if (!answer.ok) {
      throw new Error("Не вдалося отримати дані з серверу");
    }

    const result = await answer.json();
    console.log("Завдання: 4 ==============================");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 4 ==============================");
postDataWithAuth(
  "https://petstore.swagger.io/v2/store/order",
  {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2023-07-23T19:28:06.229Z",
    status: "placed",
    complete: true,
  },
  "fsdodfa8sdg76adtf687ya8rufia8d7fasy6g"
);

//Завдання 5
// Створюємо асинхронний генератор asyncGenerator, який виробляє числа з паузою в одну секунду.
// "async function*" означає, що це асинхронний генератор.
// Змінна "i" ініціалізована значенням 0 і буде збільшуватися на 1 при кожній ітерації.
// Цикл "while (true)" - це безкінечний цикл, який продовжуватиме виконуватися, поки його не зупинять зовні.
// Чекаємо поки виконається проміс якому встановимо затримку 1 секунду за допомогою setTimeout
// Віддаємо значення лічильника та збільшуємо його на один
async function* asyncGenerator() {
  let i = 0;
  while (true) {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });
    yield i++;
  }
}
// Використовуємо асинхронний генератор та записуємо його значення в константу gen
const generator = asyncGenerator();
// Створюємо асинхрону функцію printFiveItems
// Ключові слова "for await" використовуються для ітерації по асинхронним ітерабельним об'єктам.
// Перебираємо значення gen
// Виводимо в консоль поточне значення
// Умова "if (value === 4) break" зупиняє цикл після виведення п'яти чисел (від 0 до 4).
async function printFiveItems() {
  for await (const value of generator) {
    console.log(value);
    if (value === 4) break;
  }
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 5 ==============================");
printFiveItems();

//Завдання 6

// Функція, яка симулює витягування даних з бази даних
async function getDataFromDB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з бази даних");
    }, 1000);
  });
}

// Функція, яка симулює отримання даних з API
async function getDataFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з API");
    }, 800);
  });
}

// Функція, яка симулює отримання даних з кешу
async function getDataFromCache() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані з кешу");
    }, 600);
  });
}

// Оголошуємо асинхронну функцію-генератор з ім'ям gatherData
// Використовуємо try для обробки помилок
// Викликаємо асинхронну функцію getDataFromDB() і чекаємо, поки вона завершиться
// Результат роботи функції зберігаємо у змінну dbData
// yield використовується для того, щоб повернути значення dbData
// Те саме робимо для асинхронної функції getDataFromAPI(), результат зберігаємо в apiData
// І знову для асинхронної функції getDataFromCache(), результат зберігаємо в cacheData
// Виводимо помилки в консоль якщо вони є
async function* gatherData() {
  try {
    const dbData = getDataFromDB();
    yield dbData;

    const apiData = getDataFromAPI();
    yield apiData;

    const cacheData = getDataFromCache();
    yield cacheData;
  } catch (error) {
    console.log(error);
  }
}

// Створюємо асинхрону функцію displayData
async function displayData() {
  // Створюємо екземпляр генератора gatherData
  const generator = gatherData();
  // Три рази виводимо виводимо поточне значення генератора в консоль
  console.log((await generator.next()).value);
  console.log((await generator.next()).value);
  console.log((await generator.next()).value);
}

// Розкоментуйте після виконання завданння
console.log("Завдання: 6 ==============================");
displayData();

//Завдання 7
// Створюємо генератор countdownGenerator, який створює послідовність чисел від вказаного значення до 0, має параметр start
// Ініціюємо лічильник змінну count зі стартовим значенням параметра start
// Цикл, що триває доки лічильник більший або рівний 0
// Використовуємо ключове слово yield, щоб повернути поточне значення лічильника
// Зменшуємо лічильник на 1
function* countdownGenerator(start) {
  let count = start;
  while (count >= 0) {
    yield count;
    count--;
  }
}

console.log("Завдання: 7 ==============================");
// Створюємо екземпляр генератора countdown з лічильником 5
// Запускаємо генератор та отримуємо перше значення яку записуємо в змінну nextValue
// Цикл while, що виводить значення з генератора, та працює поки не є генератор вичерпаним.
// Якщо властивість done == false, генератор ще має значення для повернення.
// Виводимо поточне значення
// Отримуємо наступне значення з генератора
const generator7 = countdownGenerator(5);
let nextValue = generator7.next();
while (!nextValue.done) {
  console.log(nextValue.value);
  nextValue = generator7.next();
}
