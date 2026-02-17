const loadAllPorduct = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayProduct(data))
}

const loadAllCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => displayCategories(data))
}

const displayCategories = (categories) => {
    const CategoriesButton = document.getElementById("Categories-button");

    categories.forEach(categori => {

        const button = document.createElement("button");
        button.innerHTML = categori;
        button.classList = "px-4 py-1 border-2 rounded-3xl text-sm text-gray-600 font-bold my-2 hover:bg-blue-800 hover:text-white categori-btn";

        button.addEventListener("click", function () {
            removeActiveClass();
            this.classList.add("active");
            loadcategori(categori);
        });

        CategoriesButton.appendChild(button);
    });
};

const loadcategori = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => displayProduct(data))
};


const loadWord = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => displayWOrd(data))
}

const displayWOrd = (word) => {
    const detalisBox = document.getElementById("details-Continar");
    detalisBox.innerHTML = `
     <div class="space-y-2 border-2 rounded-md mt-4">
                <div>
                    <img class=" h-auto w-full bg-gray-100 p-6" src="${word.image}">
                </div>
                <div class="p-2 space-y-2">
                    <div class="flex justify-between itmes-center">
                        <button class="bg-blue-100 text-blue-800 text-sm px-2 rounded-xl">${word.category}</button>
                        <span><i class="fa-solid fa-star text-yellow-500"></i>${word.rating.rate}(${word.rating.count})</span>
                    </div>
                    <p class="text-md font-bold text-gray-500 truncate">${word.title}</p>
                    <h4 class="text-lg font-bold">$${word.price}</h4>
                  
                </div>
            </div>
    `;
    document.getElementById("my_modal_5").showModal();
}


const displayProduct = (products) => {
    const allProductBtn = document.getElementById("all-product");
    allProductBtn.innerHTML = "";

    products.forEach(product => {

        const div = document.createElement("div");
        div.innerHTML = `
        <div class="space-y-2 border-2 rounded-md mt-4">
                <div>
                    <img class="lg:h-80 md:h-80 h-auto w-full bg-gray-100 p-6" src="${product.image}">
                </div>
                <div class="p-2 space-y-2">
                    <div class="flex justify-between itmes-center">
                        <button class="bg-blue-100 text-blue-800 text-sm px-2 rounded-xl">${product.category}</button>
                        <span><i class="fa-solid fa-star text-yellow-500"></i>${product.rating.rate}(${product.rating.count})</span>
                    </div>
                    <p class="text-md font-bold text-gray-500 truncate">${product.title}</p>
                    <h4 class="text-lg font-bold">$${product.price}</h4>
                    <div class="flex justify-between">
                        <button onclick="loadWord(${product.id})" class="space-x-2 btn border-2 py-1 px-4 rounded-md"><i
                                class="fa-solid fa-circle-info"></i>Details</button>
                        <button onclick="addItam()" class="space-x-2 border-2 btn py-1 px-4 rounded-md"><i
                                class="fa-solid fa-cart-shopping"></i>add</button>
                    </div>
                </div>
            </div>
        `;

        allProductBtn.append(div)
    });

}
// const loadTopRatePorduct = () => {
//     fetch("https://fakestoreapi.com/products")
//         .then(res => res.json())
//         .then(data => displaytopProduct(data))
// }
// const displaytopProduct = (data) => {
// console.log(data)
// }
// const topRateSection = document.getElementById("top-rate-section");

loadAllCategories();
loadAllPorduct();
// loadTopRatePorduct();
