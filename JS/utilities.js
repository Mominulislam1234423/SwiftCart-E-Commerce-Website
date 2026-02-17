const showSection = (id)=> {
    document.getElementById('show-home').classList.add('hidden');
    document.getElementById('show-prodact').classList.add('hidden');
    // document.getElementById('show-about-section').classList.add('hidden');
    // document.getElementById('show-Contact-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}