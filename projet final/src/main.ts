import { Wookiee } from "./domains/wookiee";
import { StormTrooper } from "./domains/stormtrooper";
import { Character } from "./domains/character";
import { getPeopleAsArray } from "./infrastructures";


const wookiee: Character = new Wookiee(1, "Chewbacca");
const stormtrooper: Character = new StormTrooper(2, "Stormtrooper");

wookiee.attack(stormtrooper);
stormtrooper.attack(wookiee);

function afficherPointsDeVie(character: Character) {
    console.log(`${character.prenom} a ${character.vie.points} points de vie`);
}
afficherPointsDeVie(wookiee);
afficherPointsDeVie(stormtrooper);

const monTableauHtml = document.getElementById('monTableau');
getPeopleAsArray().then(people => {
    people.forEach(p => {
        const ligne = document.createElement('tr');
        const nom = document.createElement('td');
        nom.innerText = p.name;
        const prenom = document.createElement('td');
        prenom.innerText = p.surname;
        const taille = document.createElement('td');
        taille.innerText = p.height;
        ligne.appendChild(nom);
        ligne.appendChild(prenom);
        ligne.appendChild(taille);
        monTableauHtml?.appendChild(ligne);
    });
});


//afficherPointsDeVie('cocuou');