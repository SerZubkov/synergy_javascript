const calculator = {
  // Метод сложения
  add: (a, b) => {
    if (calculator.validateNumbers(a, b)) {
      return a + b;
    }
  },

  // Метод вычитания
  subtract: (a, b) => {
    if (calculator.validateNumbers(a, b)) {
      return a - b;
    }
  },

  // Метод умножения
  multiply: (a, b) => {
    if (calculator.validateNumbers(a, b)) {
      return a * b;
    }
  },

  // Метод деления
  divide: (a, b) => {
    if (calculator.validateNumbers(a, b)) {
      if (b === 0) {
        console.error("Ошибка: деление на ноль невозможно.");
        return undefined;
      }
      return a / b;
    }
  },

  // Вспомогательный метод для проверки чисел
  validateNumbers: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      console.error("Ошибка: оба аргумента должны быть числами.");
      return false;
    }
    return true;
  },
};

// Примеры вызова методов с разными значениями

console.log("Сложение: ", calculator.add(5, 10)); // 15
console.log("Сложение: ", calculator.add(20, -5)); // 15

console.log("Вычитание: ", calculator.subtract(15, 10)); // 5
console.log("Вычитание: ", calculator.subtract(5, -3)); // 8

console.log("Умножение: ", calculator.multiply(3, 7)); // 21
console.log("Умножение: ", calculator.multiply(0, 100)); // 0

console.log("Деление: ", calculator.divide(20, 5)); // 4
console.log("Деление: ", calculator.divide(10, 0)); // Ошибка: деление на ноль невозможно.
