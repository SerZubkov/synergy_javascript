// Получаем элементы из DOM
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note-btn");
const notesContainer = document.getElementById("notes-container");

// Функция для получения заметок из localStorage
function getNotes() {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}

// Функция для сохранения заметок в localStorage
function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Функция для отображения заметок
function displayNotes() {
  notesContainer.innerHTML = ""; // Очищаем контейнер
  const notes = getNotes();

  notes.forEach((note, index) => {
    const noteElement = createNoteElement(note, index);
    notesContainer.appendChild(noteElement);
  });
}

// Функция для создания элемента заметки
function createNoteElement(note, index) {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");
  noteElement.innerHTML = `
      <span>${note}</span>
      <div class="controls">
        <button class="edit"><img src="./assets/edit.svg"/></button>
        <button class="delete"><img src="./assets/delete.svg"/></button>
      </div>
    `;

  // Кнопка для удаления заметки
  noteElement.querySelector(".delete").addEventListener("click", () => {
    deleteNote(index, noteElement);
  });

  // Кнопка для редактирования заметки
  noteElement.querySelector(".edit").addEventListener("click", () => {
    editNote(index);
  });

  return noteElement;
}

// Функция для добавления новой заметки
function addNote() {
  const noteText = noteInput.value.trim();

  if (noteText) {
    const notes = getNotes();
    notes.push(noteText);
    saveNotes(notes);

    const newNoteElement = createNoteElement(noteText, notes.length - 1);
    newNoteElement.classList.add("adding-animation");
    notesContainer.appendChild(newNoteElement);
    noteInput.value = ""; // Очищаем поле ввода

    // Удаляем класс анимации после завершения
    setTimeout(() => {
      newNoteElement.classList.remove("adding-animation");
    }, 500);
  }
}

// Функция для удаления заметки с анимацией
function deleteNote(index, noteElement) {
  noteElement.classList.add("removing-animation");

  setTimeout(() => {
    const notes = getNotes();
    notes.splice(index, 1); // Удаляем заметку
    saveNotes(notes);
    displayNotes();
  }, 500); // Ждем завершения анимации
}

// Функция для редактирования заметки
function editNote(index) {
  const notes = getNotes();
  const newNote = prompt("Измените заметку:", notes[index]);

  if (newNote !== null) {
    notes[index] = newNote;
    saveNotes(notes);
    displayNotes();
  }
}

// Добавляем заметку по нажатию кнопки "Добавить"
addNoteBtn.addEventListener("click", addNote);

// Добавляем заметку по нажатию клавиши Enter
noteInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNote();
  }
});

// Отображаем заметки при загрузке страницы
window.onload = displayNotes;
