
let currentCuisine = "american";
function displayRecipes(filteredRecipes) {
  const container = document.getElementById("recipe-container");
  container.innerHTML = ""; 

  if (!filteredRecipes || filteredRecipes.length === 0) {
    container.innerHTML = "<p class='text-center'>No recipes found for this cuisine.</p>";
    return;
  }

  filteredRecipes.forEach(recipe => {
    const card = `
      <div class="col-md-4 recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}" class="img-fluid">
        <div class="p-3">
          <h4>${recipe.title}</h4>
          <p><strong>Category:</strong> ${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}</p>
          <button class="btn btn-danger" onclick="openModal(${recipe.id})">View Recipe</button>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}
function openModal(recipeId) {
  const recipe = window[currentCuisine]?.find(r => r.id === recipeId);
  if (!recipe) {
    alert("Recipe not found!");
    return;
  }

  document.getElementById("modal-title").textContent = recipe.title;
  document.getElementById("modal-image").src = recipe.image;
  document.getElementById("modal-instructions").innerHTML = `<li>${recipe.instructions}</li>`;
  const modal = new bootstrap.Modal(document.getElementById('recipeModal'));
  modal.show();
}
document.querySelectorAll(".category-btn").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    const filtered = category === "all"
      ? window[currentCuisine]
      : window[currentCuisine]?.filter(recipe => recipe.category === category) || [];
    displayRecipes(filtered);
  });
});

document.querySelectorAll(".cuisine-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentCuisine = button.getAttribute("data-cuisine");
    if (!window[currentCuisine]) {
      console.error(`Error: '${currentCuisine}' cuisine data is not loaded.`);
      displayRecipes([]); 
      return;
    }

    displayRecipes(window[currentCuisine]);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (!window[currentCuisine]) {
    console.error(`Error: Default cuisine '${currentCuisine}' is not loaded.`);
    displayRecipes([]); 
    return;
  }

  displayRecipes(window[currentCuisine]);
});
if (!window.american) {
  console.error("Error: American cuisine data is missing. Please check the file.");
  displayRecipes([]); 
}
