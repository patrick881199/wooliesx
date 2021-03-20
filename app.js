//Select DOM
const recipesDiv = document.querySelector(".recipes");
const navLinks = document.querySelector(".nav-links");
const filterDiv = document.querySelector(".filter");
const footer = document.querySelector("footer");

//Event Listeners
document.addEventListener("DOMContentLoaded", loadPage);

let category = "Entrees";
let typeTwo = "All";

const myRecipes = [];

//Functions

function selectedTypeOne(e) {
  e.target.classList.toggle("completed");
}

function loadPage() {
  getRecipes();
  getMenus();
  getFilter();
  getFooter();
}

function getRecipes() {
  recipesDiv.innerHTML = "";

  recipeData.forEach(function (recipe) {
    if (
      recipe.category === category &&
      (typeTwo === "All" || typeTwo === recipe.type2)
    ) {
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

      const add = document.createElement("p");
      add.classList.add("add");
      add.innerText = "Add to collection";
      add.addEventListener("click", () => addHandler(recipe));
      info.appendChild(add);

      recipesDiv.appendChild(recipeDiv);
    }
  });
}

function addHandler(recipe) {
  if (myRecipes.length === 0) {
    myRecipes.push(recipe);
  } else {
    const item = myRecipes.filter(function (item) {
      return item.id === recipe.id;
    });
    if (item.length === 0) {
      myRecipes.push(recipe);
    }
  }
  getFooter();
}

function getMenus() {
  navLinks.innerHTML = "";
  let categorys = ["Entrees", "Mains", "Salads", "Sides", "Desserts", "Drinks"];
  categorys.forEach(function (type) {
    const list = document.createElement("li");
    if (type === category) {
      list.classList.toggle("underline");
    }
    list.addEventListener("click", changeTypeOne);
    list.innerText = type;
    navLinks.appendChild(list);
  });
}

function getFooter() {
  footer.innerHTML = "";

  const collection = document.createElement("div");

  collection.classList.toggle("mycollection");

  // list.addEventListener("click", changeTypeOne);
  collection.innerHTML = `My Collections  <span>${myRecipes.length}</span>`;
  footer.appendChild(collection);
}

function changeTypeOne(e) {
  category = e.target.innerText;
  typeTwo = "All";
  getMenus();
  getRecipes();
}

function getFilter() {
  filterDiv.innerHTML = "";
  let typeTwos = ["All", "Vegan", "Vegetarian", "Pescatarian"];
  typeTwos.forEach(function (type) {
    const p = document.createElement("p");
    p.classList.add("filterItem");
    if (type === typeTwo) {
      p.classList.toggle("highlight");
    }
    p.addEventListener("click", changeTypeTwo);
    p.innerText = type;
    filterDiv.appendChild(p);
  });
}

function changeTypeTwo(e) {
  typeTwo = e.target.innerText;
  getFilter();
  getRecipes();
}
