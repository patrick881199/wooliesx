let recipeData = [
  {
    id: uuidv4(),
    image: "./imgs/image1.bmp",
    category: "Entrees",
    type2: "Vegan",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image2.bmp",
    category: "Entrees",
    type2: "Vegetarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },

  {
    id: uuidv4(),
    image: "./imgs/image3.bmp",
    category: "Entrees",
    type2: "Pescatarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image4.bmp",
    category: "Mains",
    type2: "Vegan",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image5.bmp",
    category: "Mains",
    type2: "Vegetarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },

  {
    id: uuidv4(),
    image: "./imgs/image6.bmp",
    category: "Mains",
    type2: "Pescatarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image7.bmp",
    category: "Salads",
    type2: "Vegan",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image8.bmp",
    category: "Salads",
    type2: "Vegetarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },

  {
    id: uuidv4(),
    image: "./imgs/image9.bmp",
    category: "Salads",
    type2: "Pescatarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image10.bmp",
    category: "Sides",
    type2: "Vegan",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image11.bmp",
    category: "Sides",
    type2: "Vegetarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },

  {
    id: uuidv4(),
    image: "./imgs/image12.bmp",
    category: "Sides",
    type2: "Pescatarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image13.bmp",
    category: "Desserts",
    type2: "Vegan",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image14.bmp",
    category: "Desserts",
    type2: "Vegetarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },

  {
    id: uuidv4(),
    image: "./imgs/image15.bmp",
    category: "Desserts",
    type2: "Pescatarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image16.bmp",
    category: "Drinks",
    type2: "Vegan",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
  {
    id: uuidv4(),
    image: "./imgs/image17.bmp",
    category: "Drinks",
    type2: "Vegetarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },

  {
    id: uuidv4(),
    image: "./imgs/image18.bmp",
    category: "Drinks",
    type2: "Pescatarian",
    name: "Lorem ipsum dolor sit amet.",
    description:
      "temporibus placeat, molestias voluptas quae voluptates amet quiobcaecati veniam fuga mollitia distinctio comm",
  },
];

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
