// Variables referencing the input, button, and unordered list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener('click', () => {
  const chapter = input.value.trim();

  if (chapter === '') {
    alert('Please enter a chapter name!');
    return;
  }

  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = chapter;
  deleteButton.textContent = '❌';

  li.append(deleteButton);

  list.append(li);

  input.value = '';
  input.focus();

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });
});
