//Select DOM
const recipesDiv = document.querySelector(".recipes");
const navLinks = document.querySelector(".nav-links");
const filterDiv = document.querySelector(".filter");
const footer = document.querySelector("footer");

//Event Listeners
document.addEventListener("DOMContentLoaded", loadPage);

let category = "Entrees";
let filter = "All";

let myRecipes;

let recipeData;
if (localStorage.getItem("recipeData") === null) {
  recipeData = data;
  localStorage.setItem("recipeData", JSON.stringify(recipeData));
} else {
  recipeData = JSON.parse(localStorage.getItem("recipeData"));
}

if (localStorage.getItem("myRecipes") === null) {
  myRecipes = {};
} else {
  myRecipes = JSON.parse(localStorage.getItem("myRecipes"));
}

//Functions

function loadPage() {
  getRecipes();
  getMenus();
  getFilter();
  getFooter();
}

function getRecipes() {
  recipesDiv.innerHTML = "";

  let values = Object.keys(recipeData).map(function (key) {
    return recipeData[key];
  });

  values.forEach(function (recipe) {
    if (
      recipe.category === category &&
      (filter === "All" || filter === recipe.filter)
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

      const manage = document.createElement("div");
      manage.classList.add("manage");
      const addButton = document.createElement("div");
      addButton.classList.add("add");
      addButton.innerText = "Add";

      addButton.addEventListener("click", () =>
        addHandler({ [recipe.id]: recipe })
      );

      manage.appendChild(addButton);

      info.appendChild(manage);

      recipesDiv.appendChild(recipeDiv);
    }
  });

  //localStorage.setItem("recipes", JSON.stringify(recipeData));
}

function addHandler(recipe) {
  myRecipes = { ...myRecipes, ...recipe };

  localStorage.setItem("myRecipes", JSON.stringify(myRecipes));

  getFooter();
}

function getMenus() {
  navLinks.innerHTML = "";
  let categorys = ["Entrees", "Mains", "Salads", "Sides", "Desserts", "Drinks"];
  categorys.forEach(function (c) {
    const list = document.createElement("li");
    if (c === category) {
      list.classList.toggle("underline");
    }
    list.addEventListener("click", changeCategory);
    list.innerText = c;
    navLinks.appendChild(list);
  });
}

function getFooter() {
  footer.innerHTML = "";

  const collection = document.createElement("div");

  collection.classList.toggle("mycollection");

  collection.addEventListener("click", goToMyCollection);
  collection.innerHTML = `My Collections  <span>${
    Object.keys(myRecipes).length
  }</span>`;
  footer.appendChild(collection);
}

function goToMyCollection() {
  window.location.href = "/mycollection.html";
}

function changeCategory(e) {
  category = e.target.innerText;
  filter = "All";
  getMenus();
  getRecipes();
}

function getFilter() {
  filterDiv.innerHTML = "";
  let filters = ["All", "Vegan", "Vegetarian", "Pescatarian"];
  filters.forEach(function (f) {
    const p = document.createElement("p");
    p.classList.add("filterItem");
    if (f === filter) {
      p.classList.toggle("highlight");
    }
    p.addEventListener("click", changeFilter);
    p.innerText = f;
    filterDiv.appendChild(p);
  });
}

function changeFilter(e) {
  filter = e.target.innerText;
  getFilter();
  getRecipes();
}
