/**
 * Exemple d'appel d'un bouton HTML
 */
const button: HTMLButtonElement | null = document.querySelector("#button") ;

button?.addEventListener('click', () => {
    console.log('click');
});

// *********************************************************************************************************************
type Afficher = (message: string) => void;

class Composant {
    //click(afficher: Function): void {
    click(afficher: Afficher): void {
        afficher('click');
        afficher.call(this, 'click');
    }
}

const composant = new Composant();
composant.click((message: string) => {

});

composant.click((message: string) => {

});

composant.click(() => {
    
});
// composant.click(1);