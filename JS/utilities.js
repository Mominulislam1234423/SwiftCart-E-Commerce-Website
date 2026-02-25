const showSection = (id) => {
    document.getElementById('show-home').classList.add('hidden');
    document.getElementById('show-prodact').classList.add('hidden');
    // document.getElementById('show-about-section').classList.add('hidden');
    // document.getElementById('show-Contact-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

const removeActiveClass = () => {
    const button = document.getElementsByClassName("categori-btn");
    for (let btn of button) {
        btn.classList.remove("active");
    }
}

let cartCount = 0;
const addItam = () => {
    cartCount++;
    document.getElementById("ital-count").innerText = cartCount;
}

const hamburger = () => {
    const menu = document.getElementById("Menu-bar");
    menu.innerHTML = "";

    const div = document.createElement("div");

    div.innerHTML = `
    <ul class="flex flex-col items-start gap-4 font-bold text-gray-500 cursor-pointer lg:hidden md:hidden">
        <li onclick="showSection('show-home')" class="hover:text-blue-800">Home</li>
        <li onclick="showSection('show-prodact')" class="hover:text-blue-800">Products</li>
        <li class="hover:text-blue-800">About</li>
        <li class="hover:text-blue-800">Contact</li>
    </ul>
    `;

    menu.append(div);
}