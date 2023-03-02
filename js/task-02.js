const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientH = document.querySelector ('#ingredients')

  ingredients.forEach(ingredient => {
  const element = document.createElement('li')
  element.textContent = ingredient
  element.setAttribute('class', 'item')
  ingredientH.appendChild(element)
});
