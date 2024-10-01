class Oven {
  constructor(maxTemperature) {
    // Устанавливаем начальную максимальную температуру
    this._maxTemperature = maxTemperature;
  }

  // Геттер для получения максимальной температуры
  get maxTemperature() {
    return this._maxTemperature;
  }

  // Сеттер для установки максимальной температуры с ограничением в 15 единиц
  set maxTemperature(newTemperature) {
    const difference = Math.abs(newTemperature - this._maxTemperature);

    if (difference > 15) {
      console.error("Нельзя изменить температуру больше чем на 15 единиц.");
    } else {
      this._maxTemperature = newTemperature;
    }
  }
}

// Создаем экземпляр класса Oven с допустимой начальной температурой
const myOven = new Oven(200);

// Выводим максимальную температуру в консоль
console.log("Начальная максимальная температура:", myOven.maxTemperature);

// Попробуем изменить температуру на 10 единиц (в пределах ограничения)
myOven.maxTemperature = 210;
console.log("Новая максимальная температура:", myOven.maxTemperature);

// Попробуем изменить температуру на 20 единиц (превышает ограничение)
myOven.maxTemperature = 230; // Это вызовет ошибку
console.log("Температура после попытки изменения:", myOven.maxTemperature);
