const category = document.querySelector('#categories');

const categoryList = category.querySelectorAll('.item').length;

console.log(`Number of categories: ${categoryList}`);

[...category.children].forEach((item) => {
  const titleName = item.firstElementChild.textContent;
  console.log(`Category: ${titleName}`);

  const listCount = item.lastElementChild.querySelectorAll('li').length;
  console.log(`Elements: ${listCount}`);
});
