// Reference to the input field, button, and unordered list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Function to handle adding chapters
function addChapter() {
  const chapter = input.value.trim();

  if (chapter !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
    input.focus();
  } else {
    alert('Please enter a chapter name!');
    input.focus();
  }
}

// Event listener for the button click
button.addEventListener('click', addChapter);

// Event listener for pressing "Enter" in the input field
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addChapter();
  }
});
