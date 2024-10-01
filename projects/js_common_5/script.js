// Создаем input элемент
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введите текст";

// Создаем кнопку
const button = document.createElement("button");
button.textContent = "Сохранить";

// Добавляем элементы на страницу
document.body.append(input);
document.body.append(button);

// Добавляем обработчик клика на кнопку
button.addEventListener("click", () => {
  const inputValue = input.value; // Получаем текст из input

  // Сохраняем текст в localStorage
  localStorage.setItem("Text", inputValue);

  // Через 2 секунды выводим текст из localStorage в консоль
  setTimeout(() => {
    const savedText = localStorage.getItem("Text");
    console.log("Сохраненный текст:", savedText);
  }, 2000);
});
