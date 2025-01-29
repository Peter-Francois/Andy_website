// Fonction pour afficher le haut de la page
function displayHome(event) {
    event.preventDefault();
    const HomeDiv = document.querySelector('header');
    HomeDiv.scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour afficher la page "Savoir faire"
function displayKnowHow(event) {
    event.preventDefault();
    const KnowHowDiv = document.querySelector('div.partie_grise_2');
    KnowHowDiv.scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour afficher la page "A propos"
function displayAbout(event) {
    event.preventDefault();
    const AboutDiv = document.querySelector('div.partie_blanche_2');
    AboutDiv.scrollIntoView({ behavior: 'smooth' });
}