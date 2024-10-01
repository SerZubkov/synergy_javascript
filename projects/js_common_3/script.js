// Получаем элемент контейнера
const shape = document.getElementById("shape");

// Добавляем обработчик клика на контейнер
shape.addEventListener("click", function () {
  // Переключаем между квадратом и кругом
  shape.classList.toggle("circle");
});
