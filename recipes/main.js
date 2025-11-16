console.log("main.js LOADED");

import recipes from "./recipes.mjs";
console.log("recipes IMPORTED:", recipes);


const container = document.getElementById('recipes-container');

function renderStars(amount) {
  let fullStars = Math.floor(amount);
  let halfStar = amount % 1 !== 0;
  let stars = '';

  for (let i = 0; i < fullStars; i++) stars += '★';

  if (halfStar) stars += '☆';

  while (stars.length < 5) stars += '☆';

  return stars;
}

function renderRecipe(recipe) {
  return `
    <article class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">

      <div class="recipe-info">
        <span class="tag">${recipe.tags[0]}</span>
        <h2>${recipe.name}</h2>
        <div class="rating">${renderStars(recipe.rating)}</div>
        <p>${recipe.description}</p>
      </div>
    </article>
  `;
}

function loadRecipes() {
  container.innerHTML = recipes.map(r => renderRecipe(r)).join('');
}

loadRecipes();
