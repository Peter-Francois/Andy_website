//fonction pour afficher le contact
function displayContact(event) {
    event.preventDefault();
    const ContactDiv = document.querySelector('#contact-form');
    const overlay = document.querySelector('#overlay');
    ContactDiv.style.display = 'block';
    overlay.style.display = 'block'; // Affiche l'overlay
}

// Fonction pour masquer le contact
function hideContact() {
    const ContactDiv = document.querySelector('#contact-form');
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none'; // Masque l'overlay
    ContactDiv.style.display = 'none';
}

// Fermer le menu si on clique en dehors
document.addEventListener('click', function(event) {
    const ContactDiv = document.querySelector('#contact-form');
    const overlay = document.querySelector('#overlay');
    
    // Si le clic n'est ni sur le bouton du menu ni sur le contenu du menu
    if (!ContactDiv.contains(event.target) && overlay.contains(event.target)) {
        hideContact();
    }
});



// Fonction pour afficher le haut de la page
function displayHome(event) {
    event.preventDefault();
    const HomeDiv = document.querySelector('header');
    HomeDiv.scrollIntoView({ behavior: 'smooth' });
}

// Fonction pour afficher la page "Activité"
function displayActivity(event) {
    event.preventDefault();
    const ActivityDiv = document.querySelector('div.partie_blanche_1');
    ActivityDiv.scrollIntoView({ behavior: 'smooth' });
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