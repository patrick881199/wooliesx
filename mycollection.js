//Select DOM
const recipesDiv = document.querySelector(".recipes");
const footer = document.querySelector("footer");

//Data
let myRecipes;
let recipeData = JSON.parse(localStorage.getItem("recipeData"));

//Event Listeners
document.addEventListener("DOMContentLoaded", loadPage);

//Functions

function loadPage() {
  getRecipes();

  getFooter();
}

//This one is different from the one in index.js, it accepts one parameter
function getRecipes(item) {
  recipesDiv.innerHTML = "";

  if (localStorage.getItem("myRecipes") === null) {
    myRecipes = {};
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

    const manage = document.createElement("div");
    manage.classList.add("manage");

    if (item === undefined || Object.keys(item)[0] !== recipe.id) {
      const name = document.createElement("h4");
      name.innerHTML = recipe.name;
      info.appendChild(name);

      const description = document.createElement("p");

      description.innerHTML = recipe.description;
      info.appendChild(description);
      const editButton = document.createElement("div");
      editButton.classList.add("edit");
      editButton.innerText = "Edit";
      editButton.addEventListener("click", () =>
        editHandler({ [recipe.id]: recipe })
      );

      manage.appendChild(editButton);
    } else {
      //show the editting input
      const name = document.createElement("input");
      name.setAttribute("type", "text");
      name.classList.add("input-name");
      name.setAttribute("value", recipe.name);
      info.appendChild(name);

      var description = document.createElement("TEXTAREA");
      description.classList.add("textarea-description");
      var t = document.createTextNode(recipe.description);
      description.appendChild(t);

      info.appendChild(description);

      const saveButton = document.createElement("div");
      saveButton.classList.add("save");
      saveButton.innerText = "Save";
      saveButton.addEventListener("click", () =>
        saveHandler({ [recipe.id]: recipe })
      );

      manage.appendChild(saveButton);
    }

    const deleteButton = document.createElement("div");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () =>
      deleteHandler({ [recipe.id]: recipe })
    );

    manage.appendChild(deleteButton);
    info.appendChild(manage);
    recipesDiv.appendChild(recipeDiv);
  });
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
function saveHandler(item) {
  const input = document.querySelector(".input-name");
  const name = input.value;

  const textarea = document.querySelector(".textarea-description");
  const description = textarea.value;

  let key = Object.keys(item)[0];
  myRecipes[key].name = name;
  myRecipes[key].description = description;
  localStorage.setItem("myRecipes", JSON.stringify(myRecipes));

  recipeData = { ...recipeData, ...myRecipes };
  localStorage.setItem("recipeData", JSON.stringify(recipeData));
  loadPage();
}
function editHandler(item) {
  getRecipes(item);
  getFooter();
}

function deleteHandler(item) {
  let key = Object.keys(item)[0];
  delete myRecipes[key];
  localStorage.setItem("myRecipes", JSON.stringify(myRecipes));
  loadPage();
}

function goToHomepage() {
  window.location.href = "/";
}
