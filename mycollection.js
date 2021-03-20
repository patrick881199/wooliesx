//Select DOM
const recipesDiv = document.querySelector(".recipes");
const footer = document.querySelector("footer");
let myRecipes = {};
//Event Listeners
document.addEventListener("DOMContentLoaded", loadPage);
//Functions

function loadPage() {
  getRecipes();

  getFooter();
}

function getRecipes(item) {
  recipesDiv.innerHTML = "";

  if (localStorage.getItem("myRecipes") === null) {
    myRecipes = [];
  } else {
    myRecipes = JSON.parse(localStorage.getItem("myRecipes"));
  }

  let values = Object.keys(myRecipes).map(function (key) {
    return myRecipes[key];
  });

  values.forEach(function (recipe) {
    //Create recipe div
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    const image = document.createElement("img");
    image.src = recipe.image;
    recipeDiv.appendChild(image);
    //Create list
    const info = document.createElement("div");
    info.classList.add("info");
    recipeDiv.appendChild(info);

    const name = document.createElement("h4");
    name.innerHTML = recipe.name;
    info.appendChild(name);

    const description = document.createElement("p");

    description.innerHTML = recipe.description;
    info.appendChild(description);

    const manage = document.createElement("div");
    manage.classList.add("manage");

    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () =>
      deleteHandler({ [recipe.id]: recipe })
    );

    const editButton = document.createElement("div");
    editButton.classList.add("edit");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () =>
      editHandler({ [recipe.id]: recipe })
    );

    manage.appendChild(editButton);
    manage.appendChild(deleteButton);
    info.appendChild(manage);

    recipesDiv.appendChild(recipeDiv);
  });

  //localStorage.setItem("recipes", JSON.stringify(recipeData));
}

function editHandler(item) {
  myRecipes;

  loadPage();
}
function deleteHandler(item) {
  let key = Object.keys(item)[0];
  delete myRecipes[key];
  localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
  loadPage();
}

function getFooter() {
  footer.innerHTML = "";

  const collection = document.createElement("div");

  collection.classList.toggle("mycollection");

  collection.addEventListener("click", goToHomepage);
  collection.innerHTML = `Go Back To HomePage <span>${
    Object.keys(myRecipes).length
  }</span>`;
  footer.appendChild(collection);
}

function goToHomepage() {
  window.location.href = "/";
}
