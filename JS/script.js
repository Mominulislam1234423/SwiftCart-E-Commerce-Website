const loadAllCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => displayCategories(data))
}

const displayCategories = (categoris) => {

    const CategoriesButton = document.getElementById("Categories-button");

    categoris.forEach(categori => {
        const button = document.createElement("button");
        button.classList = "px-4 py-1 border-2 rounded-3xl text-sm text-gray-600 font-bold";
        button.innerText = `${categori}`;

        CategoriesButton.append(button)
    });

};

const AllProduct = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayAllProduct(data))
}

const displayAllProduct = (products) => {

    const allProductBtn = document.getElementById("all-product");

    products.forEach(product => {
        console.log(product)

        const div = document.createElement("div");
        div.classList = "";
        div.innerHTML = `
        <div class="space-y-2 border-2 rounded-md mt-4">
                <div>
                    <img class="h-60 w-full bg-gray-100 p-6" src="${product.image}">
                </div>
                <div class="p-2 space-y-2">
                    <div class="flex justify-between itmes-center">
                        <button class="bg-blue-100 text-blue-800 text-sm px-2 rounded-xl">men's Clothing</button>
                        <span><i class="fa-solid fa-star text-yellow-500"></i>3.9(120)</span>
                    </div>
                    <p class="text-md font-bold text-gray-500">Fjallraven - foldsack No 1...</p>
                    <h4 class="text-lg font-bold">$109.95</h4>
                    <div class="flex justify-between">
                        <button class="space-x-2 border-2 py-1 px-4 rounded-md"><i
                                class="fa-solid fa-circle-info"></i>Details</button>
                        <button class="space-x-2 border-2 py-1 px-4 rounded-md"><i
                                class="fa-solid fa-cart-shopping"></i>add</button>
                    </div>
                </div>
            </div>
        `;

        allProductBtn.append(div)
    });

}
loadAllCategories();
AllProduct();