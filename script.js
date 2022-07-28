
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
// searchBar.addEventListener("click", getNameRecipe());

//TODO:Filtering out the recipe

const getListOfRecipe = () => {
  const recipe = fetch(`https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}&includeNutrition=false`);
  recipe.then(recipeObject => recipeObject.json()).then(recipeObject => {
    //FIXME:DATA STRUCTURE ARRAY
    //TODO:Get the images of the recipe
    let imagesOfRecipe = [];
    for (let i = 0; i < recipeObject.extendedIngredients.length; i++) {
      imagesOfRecipe.push(recipeObject.extendedIngredients[i].image);
    }
     // console.log(recipeObject.extendedIngredients[0].image);
    imagesOfRecipe.map(image => {
      console.log(image)
      //FIXME:Cant display the iage becauyse of the API problem
      document.querySelector(".recipe__card").innerHTML = `<img src=${image}/>`
    })
  }
  //FIXME:Display the image of the recipe in the web app
    
  );
 
}
// getListOfRecipe();

//TODO:Create random number
//FIXME:The output not show the random number
const randomId = () => {
  const numbersOfRecipe = 4000;
  return Math.floor(Math.random() * numbersOfRecipe);
}
randomId();

const getName = (randomId) => {
  const recipeNames = fetch(
    `https://api.spoonacular.com/recipes/714627/information?apiKey=${apiKey}&includeNutrition=false`
  );
  recipeNames.then(response => response.json()).then(names => console.log(names.title))
}
//TODO:Get the name of the recipe from random number