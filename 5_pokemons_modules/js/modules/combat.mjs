export default class Combat {

    constructor(combattant1, combattant2){
        let tirageAuSort = Math.random();
        if(tirageAuSort > 0.5){
            this.combattant1 = combattant1;
            this.combattant2 = combattant2;
        }else{
            this.combattant1 = combattant2;
            this.combattant2 = combattant1;
        }
    
        console.log('<h4>'+ this.combattant1.nom + ' VS ' + this.combattant2.nom + '</h4>');
        console.log('<p>Le tirage au sort a décidé que '+ this.combattant1.nom + ' attaquait en premier. </p>');
    }

    lancer(){
        // reinitialisation PV des deux pokemons combattants
        this.combattant1.reinitialisationPV();
        this.combattant2.reinitialisationPV();

        console.log('<p>'+ this.combattant1.nom + ' a ' + this.combattant1.pv + ' points de vie. </p>');
        console.log('<p>'+ this.combattant2.nom + ' a ' + this.combattant2.pv + ' points de vie. </p>');
        console.log('--');

        let degats;
        //  Le combat continue tant que les deux Pokemons ont des PV
        while(this.combattant1.pvRestant > 0 && this.combattant2.pvRestant > 0){

            // Le 1er Pokemon attaque le 2eme
            degats = this.combattant1. attaque(this.combattant2);
            this.combattant2.pvRestant -= degats;
            console.log('<p>'+ this.combattant1.nom + ' a attaqué. Il a fait '+ degats + ' de dégâts. </p>');

            console.log('-');

            // Le 2eme Pokemon attaque le 1er
            degats = this.combattant2. attaque(this.combattant1);
            this.combattant1.pvRestant -= degats;
            console.log('<p>'+ this.combattant2.nom + ' a attaqué. Il a fait '+ degats + ' de dégâts. </p>');
        }

        let vainqueur = this.vainqueur(this.combattant1, this.combattant2);

        // S'il y a un vainqueur
        if(vainqueur){
            console.log('<h4>'+ vainqueur.nom + ' a gagné le combat. Il lui restait ' + vainqueur.pvRestant + ' points de vie. </h4>');
        }else{
            console.log('<h4>EGALITÉ</h4>');
        }
    }

    vainqueur(combattant1, combattant2){
        let vainqueur;
        
        if(combattant1.pvRestant > 0){
            vainqueur = combattant1;
        }

        if(combattant2.pvRestant > 0){
            vainqueur = combattant2;
        }

        if(combattant1.pvRestant < 0 && combattant2.pvRestant < 0){
            vainqueur = null;
        }

        return vainqueur;
    }


}