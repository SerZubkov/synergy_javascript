// Функция для проверки наличия слова "javascript" в строке
export function containsJavascript(str) {
  // Регулярное выражение для поиска слова "javascript", игнорируя регистр
  const regex = /javascript/i;

  // Возвращаем результат проверки
  return regex.test(str);
}
