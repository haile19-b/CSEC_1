const themeToggle = document.getElementById('theme-toggle');
const addNoteBtn = document.getElementById('add-note-btn');
const modal = document.getElementById('add-note-modal');
const cancelBtn = document.getElementById('cancel-btn');
const applyBtn = document.getElementById('apply-btn');
const newNoteInput = document.getElementById('new-note-input');
const todoList = document.getElementById('todo-list');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'blue';
    } else {
        document.body.style.backgroundColor = '#f9f9f9';
        document.body.style.color = '#333';
    }
});

addNoteBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    newNoteInput.value = '';
});

applyBtn.addEventListener('click', () => {
    const noteText = newNoteInput.value.trim();
    if (noteText) {
        const newNote = document.createElement('li');
        newNote.innerHTML = `
            <input type="checkbox">
            <label>${noteText}</label>
        `;
        todoList.appendChild(newNote);
    }
    modal.style.display = 'none';
    newNoteInput.value = '';
});
