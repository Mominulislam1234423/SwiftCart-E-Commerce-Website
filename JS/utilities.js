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