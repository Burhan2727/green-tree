// all categories functionality start
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((categories) => displayCategories(categories.categories));
};
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById
  ("categories-container");
  console.log(categories)
  for (const categori of categories) {
    const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <a id="btn-active-${categori.id}" class=" hover:bg-[#15803D] hover:text-white md:w-full text-[#1F2937] cursor-pointer block rounded-sm p-3">${categori.category_name}
    </a>
    `;
    categoriesContainer.appendChild(btnDiv)
  }

};
loadCategories();
// all categories functionality end
