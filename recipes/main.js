import recipes from "./recipes.mjs";

const container = document.getElementById("recipes-container");

function recipeTemplate(recipe) {
	const tagList = recipe.tags
		.map(tag => `<li>${tag}</li>`)
		.join("");

	const fullStars = Math.floor(recipe.rating);
	const hasHalf = recipe.rating % 1 !== 0;
	const emptyStars = 5 - Math.ceil(recipe.rating);

	let starIcons = "";

	for (let i = 0; i < fullStars; i++) {
		starIcons += `<span aria-hidden="true" class="icon-star">⭐</span>`;
	}

	if (hasHalf) {
		starIcons += `<span aria-hidden="true" class="icon-star-half">☆</span>`;
	}

	for (let i = 0; i < emptyStars; i++) {
		starIcons += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
	}

	return `
<figure class="recipe">
	<img src="${recipe.image}" alt="Image of ${recipe.name}" />
	<figcaption>

		<ul class="recipe__tags">
			${tagList}
		</ul>

		<h2><a href="#">${recipe.name}</a></h2>

		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: ${recipe.rating} out of 5 stars"
			>
				${starIcons}
			</span>
		</p>

		<p class="recipe__description">
			${recipe.description}
		</p>

	</figcaption>
</figure>`;
}

function loadRandomRecipe() {
	const randomIndex = Math.floor(Math.random() * recipes.length);
	const recipe = recipes[randomIndex];
	container.innerHTML = recipeTemplate(recipe);
}

loadRandomRecipe();
