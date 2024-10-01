// Класс Oven из задания 1
class Oven {
  constructor(maxTemperature) {
    this._maxTemperature = maxTemperature;
    this.currentTemperature = 0; // Текущая температура по умолчанию 0
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

// Класс EnhancedOven, который наследует Oven
class EnhancedOven extends Oven {
  constructor(maxTemperature) {
    super(maxTemperature); // Вызов конструктора родительского класса
    this.isOn = false; // Индикатор состояния включена/выключена
  }

  // Метод включения плиты
  turnOn() {
    if (this.isOn) {
      console.log("Печь уже включена.");
      return;
    }

    console.log("Печь включена. Начинается нагрев...");
    this.isOn = true;

    // Нагрев печи
    const heatingInterval = setInterval(() => {
      if (this.currentTemperature < this.maxTemperature) {
        this.currentTemperature++;
        console.log(`Текущая температура: ${this.currentTemperature}°C`);
      } else {
        console.log("Печь полностью нагрета.");
        clearInterval(heatingInterval);
        this.turnOff(); // Вызов метода выключения при достижении максимальной температуры
      }
    }, 500); // Нагрев на 1°C каждые 500 мс
  }

  // Метод выключения плиты
  turnOff() {
    if (!this.isOn) {
      console.log("Печь уже выключена.");
      return;
    }

    console.log("Печь выключена. Начинается охлаждение...");
    this.isOn = false;

    // Охлаждение печи
    const coolingInterval = setInterval(() => {
      if (this.currentTemperature > 0) {
        this.currentTemperature--;
        console.log(`Текущая температура: ${this.currentTemperature}°C`);
      } else {
        console.log("Печь остыла.");
        clearInterval(coolingInterval); // Останавливаем охлаждение, когда температура достигнет 0
      }
    }, 500); // Понижение на 1°C каждые 500 мс
  }
}

// Создаем новый экземпляр класса улучшенной печи
const myEnhancedOven = new EnhancedOven(10); // Максимальная температура 10°C

// Выводим в консоль максимальную температуру
console.log("Максимальная температура печи:", myEnhancedOven.maxTemperature);

// Включаем печь
myEnhancedOven.turnOn();
