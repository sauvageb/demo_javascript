// Recuperation des textarea
// getElementById fonctionne pour les elements par id
// querySelector('#start') peut fonctionner aussi.
const txtAreaStart = document.getElementById('start');
const txtAreaEnd = document.getElementById('end');

function convert() {
    // Recuperation du texte a convertir en majuscules
    let textToConvert = txtAreaStart.value;
    // Conversion
    let textConverted = textToConvert.toUpperCase();
    // Affectation de la conversion dans la textarea
    txtAreaEnd.value = textConverted;
    // Vidage de la premiere textarea
    txtAreaStart.value = '';
}

// Recuperation du bouton
const buttonConvert = document.getElementById('convertBtn');
// Création d'un evenement clique sur le bouton
buttonConvert.addEventListener('click', function (event) {
    // Au clique, annulation du comportement par default de <form>
    event.preventDefault();
    // Execution de notre fonction convert
    convert();
});

// Création d'un evenement (lorsque l'on clique sur la textarea start)
// Afin de vider le champs de la textarea end si remplie
txtAreaStart.addEventListener('click', function (event) {
    txtAreaEnd.value = '';
});
