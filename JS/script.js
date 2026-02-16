const loadAllCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => displayCategories(data))
}

const displayCategories = (categoris) => {

    const CategoriesButton = document.getElementById("Categories-button");

    categoris.forEach(categori => {
        console.log(categori)

        const button = document.createElement("button");
        button.classList = "px-4 py-1 border-2 rounded-3xl text-sm text-gray-600 font-bold";
        button.innerText = `${categori}`;

        CategoriesButton.append(button)
    });

}

loadAllCategories();