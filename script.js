const groceries = document.getElementsByClassName('groceries');

const pencil = document.getElementById('pencil');

const input = document.getElementById('userInput');

const allItems = document.getElementById('allItems');

pencil.addEventListener('click', function () {
  allItems.innerHTML = '';
});

input.addEventListener('keydown', function (event) {
  if (event.key == 'Enter') addItem();
});

function addItem() {
  var h2 = document.createElement('h2');
  h2.innerHTML = '* ' + input.value;

  h2.addEventListener('click', function () {
    h2.style.textDecoration = 'line-through';
  });

  allItems.insertAdjacentElement('beforeend', h2);

  input.value = '';
}
