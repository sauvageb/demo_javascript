console.log('### Pokemon Project ###');

// Création du premier Pokemon
let attaqueStatik = new Attaque('Statik', 10);
let attaqueParaTonnerre = new Attaque('ParaTonnerre', 25);
let pikachu = new Pokemon('Pikachu', 25, 60, 6.0, 'Electrique', 82, attaqueStatik, attaqueParaTonnerre);

// Création du deuxième Pokemon
let attaqueaAdaptabilite = new Attaque('Adaptabilite', 9);
let attaqueAnticipation = new Attaque('Anticipation', 15);
let evoli = new Pokemon('Evoli', 133, 30, 6.6, 'Normal', 70, attaqueaAdaptabilite, attaqueAnticipation);


let combat = new Combat(pikachu, evoli);
combat.lancer();
