// loading funtion start
const manageSpinner = (status) => {
  if (status === true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("plants-card").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("plants-card").classList.remove("hidden");
  }
};
// loading funtion end
// remove active function start
const removeActive = () => {
  document.querySelectorAll(".btn-categories").forEach((btnCategorie) => {
    btnCategorie.classList.remove("active");
  });
};
// remove active function end
// all categories functionality start
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((categories) => displayCategories(categories.categories));
};
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  // console.log(categories)
  for (const categori of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <a onclick="categoriLoadData(${categori.id})" id="btn-categories-${categori.id}" class=" hover:bg-[#05b646] hover:text-white md:w-full text-[#1F2937] cursor-pointer inline-block md:block rounded-sm p-3 m-1 md:mb-3 btn-categories">${categori.category_name}
    </a>
    `;
    categoriesContainer.appendChild(btnDiv);
  }
};
const categoriLoadData = (id) => {
  manageSpinner(true);
  removeActive();
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const btnCategorie = document.getElementById(`btn-categories-${id}`);
      btnCategorie.classList.add("active");
      displayCategoriData(data.plants);
    });
};
const displayCategoriData = (plants) => {
  const plantsCard = document.getElementById("plants-card");
  plantsCard.innerHTML = "";
  for (const plant of plants) {
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
                <button onclick="cartHandle(${plant.id})" class="btn bg-[#15803D] w-full rounded-2xl text-white">
                  Add to Cart
                </button>
              </div>
    
    `;
    plantsCard.appendChild(plantDiv);
  }
  manageSpinner(false);
  return;
};
loadCategories();
// all categories functionality end

// all plants funtionality start
const loadPlants = () => {
  manageSpinner(true);
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};
const displayPlants = (plants) => {
  // console.log(plants)
  const plantsCard = document.getElementById("plants-card");
  for (const plant of plants) {
    const cartObj = { name: plant.name, price: plant.price };
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
                <button onclick="cartHandle(${plant.id})" class="btn bg-[#15803D] w-full rounded-2xl text-white">
                  Add to Cart
                </button>
              </div>
    
    `;
    plantsCard.appendChild(plantDiv);
  }
  manageSpinner(false);
  return;
};
loadPlants();
// all plants funtionality end

// plants modal funtionality start
const treeLoadDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTreeDetails(data.plants));
};
const displayTreeDetails = (tree) => {
  const detailsContainer = document.getElementById("details-container");
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
  `;
  document.getElementById("my_modal_5").showModal();
};

// plants modal funtionality end

// cart functionality start

const cartHandle = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayCart(data.plants);
    });
};
let totalPrice = 0;
const displayCart = (plant) => {
  alert(`${plant.name} has been added your cart`);
  document.getElementById("total-container").classList.remove("hidden");
  const rightContainer = document.getElementById("right-container");
  const div = document.createElement("div");
  div.innerHTML = `
  <div id="right-content-${plant.id}"
                class="right-content bg-[#F0FDF4] flex justify-between items-center mb-1 p-2 rounded-lg"
              >
                <div>
                  <h2 class="font-semibold text-sm"> ${plant.name} </h2>
                <p class="text-gray-400">৳ <span id="plant-price-${plant.id}">${plant.price}</span> </p>
                </div>
                <button onclick="crossHandle(${plant.id})" id="cross-${plant.id}" class="cursor-pointer text-red-500">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
            
  `;
  rightContainer.prepend(div);
  let price = parseInt(`${plant.price}`);
  totalPrice = totalPrice + price;
  document.getElementById("price").innerText = totalPrice;
  console.log(totalPrice);
  // console.log(price)
};
const crossHandle = (id) => {
  const rightContent = document.getElementById(`right-content-${id}`);
  if (rightContent) {
    const removePriceValue = document.getElementById(
      `plant-price-${id}`
    ).innerText;
    const removePriceValueNumber = parseInt(removePriceValue);
    totalPrice = totalPrice - removePriceValueNumber;
    document.getElementById("price").innerText = totalPrice;
    rightContent.remove()
  }

  if (totalPrice === 0) {
    document.getElementById("total-container").classList.add("hidden");
  }
};
// cart functionality end
