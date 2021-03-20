//Select DOM
const recipesDiv = document.querySelector(".recipes");
const navLinks = document.querySelector(".nav-links");
const filterDiv = document.querySelector(".filter");
const footer = document.querySelector("footer");

//Event Listeners
document.addEventListener("DOMContentLoaded", loadPage);

let category = "Entrees";
let category2 = "All";

let myRecipes;

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
      (category2 === "All" || category2 === recipe.type2)
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

      add.addEventListener("click", () => addHandler({ [recipe.id]: recipe }));
      info.appendChild(add);

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

  collection.addEventListener("click", goToMyCollection);
  collection.innerHTML = `My Collections  <span>${
    Object.keys(myRecipes).length
  }</span>`;
  footer.appendChild(collection);
}

function goToMyCollection() {
  window.location.href = "/mycollection.html";
}

function changeTypeOne(e) {
  category = e.target.innerText;
  category2 = "All";
  getMenus();
  getRecipes();
}

function getFilter() {
  filterDiv.innerHTML = "";
  let typeTwos = ["All", "Vegan", "Vegetarian", "Pescatarian"];
  typeTwos.forEach(function (type) {
    const p = document.createElement("p");
    p.classList.add("filterItem");
    if (type === category2) {
      p.classList.toggle("highlight");
    }
    p.addEventListener("click", changeTypeTwo);
    p.innerText = type;
    filterDiv.appendChild(p);
  });
}

function changeTypeTwo(e) {
  category2 = e.target.innerText;
  getFilter();
  getRecipes();
}
