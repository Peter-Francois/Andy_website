// Fonction pour afficher le haut de la page
function displayHome(event) {
    event.preventDefault();
    const HomeDiv = document.querySelector('div.cover');
    HomeDiv.scrollIntoView({ behavior: 'smooth' });
}