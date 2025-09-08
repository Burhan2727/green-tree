// loading funtion start
const manageSpinner = (status)=>{
    if(status === true){
        document.getElementById("spinner").classList.remove("hidden")
        document.getElementById("plants-card").classList.add("hidden")
    }else{
        document.getElementById("spinner").classList.add("hidden")
        document.getElementById("plants-card").classList.remove("hidden")
    }
}
// loading funtion end
// remove active function start
const removeActive = ()=>{
  document.querySelectorAll(".btn-categories").forEach(btnCategorie => {
    btnCategorie.classList.remove("active")
  })
}
// remove active function end
// all categories functionality start
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((categories) => displayCategories(categories.categories));
};
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById
  ("categories-container");
  // console.log(categories)
  for (const categori of categories) {
    const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
    <a onclick="categoriLoadData(${categori.id})" id="btn-categories-${categori.id}" class=" hover:bg-[#15803D] hover:text-white md:w-full text-[#1F2937] cursor-pointer inline-block md:block rounded-sm p-3 md:mb-5 btn-categories">${categori.category_name}
    </a>
    `;
    categoriesContainer.appendChild(btnDiv)
  }

};
const categoriLoadData = (id)=>{
  manageSpinner(true)
  removeActive()
  const url = `https://openapi.programming-hero.com/api/category/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => {
    const btnCategorie = document.getElementById(`btn-categories-${id}`)
    btnCategorie.classList.add("active")
    displayCategoriData(data.plants)
  })
}
const displayCategoriData = (plants)=>{
  const plantsCard = document.getElementById("plants-card");
  plantsCard.innerHTML = ""
  for(const plant of plants){
    const plantDiv = document.createElement("div");
    plantDiv.innerHTML = `
    <div class="bg-white p-3 rounded-lg space-y-3 h-full flex flex-col">
                <img class ="h-48 w-full object-cover rounded-lg" src="${plant.image}" alt="" />
                <h2 onclick="treeLoadDetails(${plant.id})" class="font-semibold text-lg cursor-pointer">
                ${plant.name}
                </h2>
                <p class="text-sm flex-grow">
                  ${plant.description}
                </p>
                <div class="flex justify-between">
                  <span
                    class="bg-[#DCFCE7] p-1 rounded-2xl text-[#15803D] text-sm font-medium font-geist"
                    >${plant.category}</span
                  >
                  <p class="font-semibold text-lg">৳<span>${plant.price}</span></p>
                </div>
                <button class="btn bg-[#15803D] w-full rounded-2xl text-white">
                  Add to Cart
                </button>
              </div>
    
    `
    plantsCard.appendChild(plantDiv)
  }
  manageSpinner(false)
  return
}
loadCategories();
// all categories functionality end



// categories plants funtionality start
// categories plants funtionality end

// all plants funtionality start
const loadPlants = ()=>{
  manageSpinner(true)
  fetch("https://openapi.programming-hero.com/api/plants")
  .then(res => res.json())
  .then(data => displayPlants(data.plants))
}
// {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
// }
const displayPlants = (plants)=>{
  // console.log(plants)
  const plantsCard = document.getElementById("plants-card");
  for(const plant of plants){
    const plantDiv = document.createElement("div");
    plantDiv.innerHTML = `
    <div class="bg-white p-3 rounded-lg space-y-3 h-full flex flex-col">
                <img class ="h-48 w-full object-cover rounded-lg" src="${plant.image}" alt="" />
                <h2 onclick="treeLoadDetails(${plant.id})" class="font-semibold text-lg cursor-pointer">
                ${plant.name}
                </h2>
                <p class="text-sm flex-grow">
                  ${plant.description}
                </p>
                <div class="flex justify-between">
                  <span
                    class="bg-[#DCFCE7] p-1 rounded-2xl text-[#15803D] text-sm font-medium font-geist"
                    >${plant.category}</span
                  >
                  <p class="font-semibold text-lg">৳<span>${plant.price}</span></p>
                </div>
                <button class="btn bg-[#15803D] w-full rounded-2xl text-white">
                  Add to Cart
                </button>
              </div>
    
    `
    plantsCard.appendChild(plantDiv)
  }
  manageSpinner(false)
  return
}
loadPlants()
// all plants funtionality end
// {
//     "id": 30,
//     "image": "https://i.ibb.co.com/0jLycYdv/Water-Hyacinth-min.jpg",
//     "name": "Water Hyacinth",
//     "description": "A floating plant with violet flowers that provide shade to aquatic creatures. Known for rapid growth in ponds.",
//     "category": "Aquatic Plant",
//     "price": 250
// }
// plants modal funtionality start
const treeLoadDetails = (id)=>{
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayTreeDetails(data.plants
))
}
const displayTreeDetails = (tree)=>{
  const detailsContainer = document.getElementById("details-container")
  detailsContainer.innerHTML = `
  <div class="bg-white p-3 rounded-lg space-y-3 h-full flex flex-col">
            <h2 class="font-semibold text-lg">${tree.name}</h2>
            <img
              class="h-48 w-full object-cover rounded-lg"
              src="${tree.image}"
              alt=""
            />
            <p><span class="font-semibold">Category:</span> ${tree.category}</p>
            <p><span class="font-semibold">Price:</span> ${tree.price}</p>
            <p class="text-sm flex-grow">
              <span class="font-semibold">Description:</span> ${tree.description}
            </p>
          </div>
  `
  document.getElementById("my_modal_5").showModal()
}

// plants modal funtionality end
