
const recipeCard = document.querySelector(".recipe__card");
const getNameRecipe = () => {
  fetch(
    `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=false`
  )
    .then((response) => response.json())
    .then((recipeInfo) => {
      console.log(recipeInfo.title)
      document.querySelector(".recipe__card").innerHTML = `<img src="${recipeInfo.image}" height
      =200 width=100/>`
    });
};

getNameRecipe();