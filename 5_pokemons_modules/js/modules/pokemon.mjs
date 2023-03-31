export default class Pokemon {

    pvRestant;

    constructor(nom, numero, taille, poids, type, pv, attaque1, attaque2){
        this.nom = nom;
        this.numero = numero;
        this.taille = taille;
        this.poids = poids;
        this.type = type;
        this.pv = pv;
        this.attaque1 = attaque1;
        this.attaque2 = attaque2;
    }

    reinitialisationPV(){
        this.pvRestant = this.pv;
    }

    attaque(){
        let attaqueUtilisee;
        let degats;

        // Si le Pokemon attaquant a plus de 20% des PV Restants
        if(this.pvRestant > ((20 * this.pv) / 100)){
            attaqueUtilisee = this.attaque1;
        }else{
            attaqueUtilisee = this.attaque2;
        }

        // 10% de chances de doubler ses dégats
        if(Math.random() < 0.1){
            degats = attaqueUtilisee.degats * 2;
        }else {
            degats = attaqueUtilisee.degats;
        }

        return degats;
    }
 
}