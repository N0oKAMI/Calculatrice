// Classe de la Calculatrice

class BaseCalculator {
    constructor() {
        this.zoneSaisie = document.getElementById('zone-saisie');
        this.resultat = document.getElementById('resultat');
        this.history = [];
    }
    
    calculate() {
        let expression = this.zoneSaisie.value;
        this.resultat.value = eval(expression);
    }

    // affiche le chiffre du bouton cliqué
    display(chiffre) {
        this.zoneSaisie.value += chiffre;
        this.history.push(chiffre);
    }

    // affiche l'operateur voulu 
    AddOperator(operateur) {
        this.zoneSaisie.value += operateur;
        this.history.push(operateur);
    }

    // affiche la virgule
    AddComma() {
        if (!this.zoneSaisie.value.includes('.')) {
            this.zoneSaisie.value += '.';
            this.history.push('.');
        }
    }

    // affiche les parentheses
    AddParenthesis(parenthese) {
        this.zoneSaisie.value += parenthese;
        this.history.push(parenthese);
    }

    // efface le dernier caractère tapé 
    erase() {
        this.zoneSaisie.value = this.zoneSaisie.value.slice(0, -1);
        this.history.splice(this.history.length - 1, 1);
    }

    //efface tous les caractères de la zone de saisie et d'affichage
    allErase() {
        this.zoneSaisie.value = "";
        this.resultat.value = "";
    }
    
    // affichage la dernière opération effectuée
    displayHistory() {
        if (this.history.length != 0) {
            this.history.forEach(elem => this.display(elem));
        }
        // vide la mémoir de l'historique
        this.history.splice(0, this.history.length);
    }
}
let baseCalculator = new BaseCalculator();