// Импортируем функцию из файла checkString.js
import { containsJavascript } from "./checkString.js";

// Строка для проверки
const testString = "Привет Javascript";

// Вызываем функцию и выводим результат в консоль
const result = containsJavascript(testString);
console.log(`Содержит ли строка "javascript"?: ${result}`);
