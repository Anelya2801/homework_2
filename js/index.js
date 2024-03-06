
// ex-1
// const user = prompt("У квадратного стола отпилили один угол. Сколько теперь углов у него стало?");
// if (user === "5" || user === "five") {
//     alert("Верный ответ!");
// } else {
//     alert("Неверный ответ!");
// }

// ex-2

// const age = prompt("How old are you?");

// if (age >= 1 && age <= 13) {
//     console.log("Советую вам посмотреть мой любимый мультфильм.");
// } else if (age >= 14 && age <= 17) {
//     console.log("Советую вам посмотреть приключенческий фильм.");
// } else if (age >= 18) {
//     console.log("Советую вам посмотреть серьезный фильм.");
// } else {
//     console.log("Ввел неверный возраст, ошибке.");
// }


// ex-3
// const favoriteDrink = prompt("What is your favorite drink?");

// switch (favoriteDrink) {
//     case "beer":
//     case "vodka":
//         alert("предупреждает пользователя о вреде чрезмерного употребления алкоголя.");
//         break;
//     case "coffee":
//         alert("предупреждает о вреде кофеина.");
//         break;
//     case "water":
//         alert("показать нейтральное сообщение на ваш выбор.");
//         break;
//     default:
//         alert("Спс за то что делитесь люб напитками!");
//         break;
// }


// ex-4
// Ошибка в строке if (number = 11), так как здесь используется оператор присваивания (=) вместо сравнения (== или ===).
// let number = 10;
// if (number === 11) {
//     alert('Number is 11!');
// } else {
//     alert('Number is 10!');
// }

// ex-6

// let isRaining = true;
// let isSunny = false;

// if (isRaining && isSunny) {
//     console.log('It is raining and sunny at the same time!');
// } else {
//     console.log('It is not raining and sunny at the same time.');
// }


// ex-7

// let numberAsString = "42";
// let number = parseInt(numberAsString);
// let sum = number + 10;

// console.log(sum);

// ex-8

// let age = 20;

// if (age >= 18) {
//     console.log('18+');
// } else {
//     console.log('Меньше 18 лет');
// }


// ex-9

// let isWeekend = true;
// let hasTimeOff = true;

// if (isWeekend && hasTimeOff) {
//     console.log("У вас есть выходные и вы можете отдохнуть!");
// }

// ex-10

// let password = "MySecretPassword123";

// if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
//     console.log("Пароль допустим");
// } else {
//     console.log("Пароль недопустим");
// }

// ex-11
// let studentGrade = prompt("Введите оценку за экзамен:");
// studentGrade = parseInt(studentGrade); 

// if (studentGrade >= 90) {
//     console.log("Отлично!");
// } else if (studentGrade >= 70) {
//     console.log("Хорошо!");
// } else {
//     console.log("Попробуйте еще раз!");
// }

// ex-12

// let currentDate = new Date();
// let targetDate = new Date("2023-09-01"); 

// if (currentDate >= targetDate) {
//     console.log("Добро пожаловать!");
// } else {
//     console.log("Скоро начнем!");
// }