const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ulItem = document.querySelector('#ingredients');

function createList() {
  const items = [];
  for (let i = 0; i < ingredients.length; i++) {
    const item = document.createElement('li');
    item.textContent = ingredients[i];
    item.classList.add('item');
    items.push(item);
  }
  ulItem.append(...items);
}
const result = createList();
