import { Wookiee } from "./domains/wookiee";
import { StormTrooper } from "./domains/stormtrooper";
import { Character } from "./domains/character";


const wookiee: Character = new Wookiee(1, "Chewbacca");
const stormtrooper: Character = new StormTrooper(2, "Stormtrooper");

wookiee.attack(stormtrooper);
stormtrooper.attack(wookiee);

function afficherPointsDeVie(character: Character) {
    console.log(`${character.prenom} a ${character.vie.points} points de vie`);
}
afficherPointsDeVie(wookiee);
afficherPointsDeVie(stormtrooper);



//afficherPointsDeVie('cocuou');