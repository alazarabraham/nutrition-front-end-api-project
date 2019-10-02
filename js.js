"use strict"
var counter = 0;
fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=chicken&p=3")
  .then(result => {
    //console.log(result);
    return result.json();
  })
  .then(data => {
    const food = document.getElementById("ingredient");
    const foodPicture = document.getElementById("foodPicture");
    const recipes = data.results;
    const recipeList = document.getElementById("recipelist");
    //console.log("RECIPES: "+recipes)
    // for(var i =0; i < recipes.length; i++){
    //   console.log(recipes[i]);
    //   const recipe = recipes[i];
    //   const title = document.createElement("h1");
    //   title.innerHTML = recipe.title;
    //   const ingredients = document.createElement("p");
    //   ingredients.innerHTML = recipe.ingredients;
    //   recipeList.appendChild(title);
    //   recipeList.appendChild(ingredients);
    // }
    //foodPicture.src = chicken.thumbnail;

    food.addEventListener("click", function () {
      if (counter == 0) {
        for (var i = 0; i < recipes.length; i++) {
          console.log(recipes[i]);
          const recipe = recipes[i];
          const title = document.createElement("h1");
          title.innerHTML = recipe.title;
          const ingredients = document.createElement("p");
          ingredients.innerHTML = recipe.ingredients;
          recipeList.appendChild(title);
          recipeList.appendChild(ingredients);
          foodPicture.style.display = "none";
        }
        counter++;
      }
    })
  })
  .catch(error => console.log(error));