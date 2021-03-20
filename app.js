//Select DOM
const recipesDiv = document.querySelector(".recipes");

//Event Listeners
document.addEventListener("DOMContentLoaded", getRecipes);

//Functions

function getRecipes() {
  let recipes;
  if (localStorage.getItem("recipes") === null) {
    recipes = [
      {
        image: "./imgs/meat1.bmp",
        name: "Lorem ipsum dolor sit amet.",
        description:
          "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
      },
      {
        image: "./imgs/meat2.bmp",
        name: "Lorem ipsum dolor sit amet.",
        description:
          "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
      },
      {
        image: "./imgs/meat3.bmp",
        name: "Lorem ipsum dolor sit amet.",
        description:
          "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
      },
      {
        image: "./imgs/meat4.bmp",
        name: "Lorem ipsum dolor sit amet.",
        description:
          "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
      },
    ];
  } else {
    recipes = JSON.parse(localStorage.getItem("recipes"));
  }
  recipes.forEach(function (recipe) {
    //Create recipe div
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    //Create image
    const image = document.createElement("img");
    image.src = recipe.image;
    recipeDiv.appendChild(image);
    //Create list
    const info = document.createElement("div");
    info.classList.add("info");
    recipeDiv.appendChild(info);

    //Create Completed Button
    const name = document.createElement("h4");
    name.innerHTML = recipe.name;
    info.appendChild(name);

    //Create trash button
    const description = document.createElement("p");
    description.innerHTML = recipe.description;
    info.appendChild(description);
    //attach final Todo
    recipesDiv.appendChild(recipeDiv);
  });
}
