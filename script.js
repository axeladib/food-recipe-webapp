
//TODO: getNameRecipe();
//FIXME:Cannot accesing the DOM
//FIXME:Failed to display name in h4 attribute
const apiKey = "b8c5e15c587342d0b71f4810901d9384";
const getNameRecipe = () => {
  fetch(
    `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=false`
  )
    .then((response) => response.json())
    .then((recipeInfo) => {
      console.log(recipeInfo.title);
      document.querySelector(".recipe__name").innerText = recipeInfo.title;
    });
};
const searchBar = document.getElementById("searchIcon");
searchBar.addEventListener("click", getNameRecipe());

//TODO:Filtering out the recipe

const getListOfRecipe = () => {
  const recipe = fetch(`https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=false`);
  recipe.then(recipeObject => recipeObject.json()).then(recipeObject => {
    //FIXME:DATA STRUCTURE ARRAY
    //TODO:Get the images of the recipe
    let imageOfRecipe = [];
    for (let i = 0; i < recipeObject.extendedIngredients.length; i++) {
      imageOfRecipe.push(recipeObject.extendedIngredients[i].image);
    }
    // console.log(imageOfRecipe);
     // console.log(recipeObject.extendedIngredients[0].image);
  }
  
  );
 
}
getListOfRecipe();


