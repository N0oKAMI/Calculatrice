let zoneSaisie = document.getElementById('zone-saisie');
let resultat = document.getElementById('resultat');

function display(chiffre) {
    zoneSaisie.value += chiffre;
}

function ajouterOperateur(operateur) {
    zoneSaisie.value += operateur;
}

function ajouterVirgule() {
    if (!zoneSaisie.value.includes('.')) {
        zoneSaisie.value += '.';
    }
}

function ajouterParenthese(parenthese) {
    zoneSaisie.value += parenthese;
}

function effacer() {
    zoneSaisie.value = zoneSaisie.value.slice(0, -1);
}

function calculer() {
    let expression = zoneSaisie.value;
    resultat.value = eval(expression);
}