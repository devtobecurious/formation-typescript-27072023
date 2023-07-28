import Vie from './vie';
import {Arme, ArmeOrUndefined} from './arme';

/**
 * Interface représentant un attaquant
 */
export interface Attaquant {
    /**
     *  Attaque un personnage
     * @param character Le personnage à attaquer
     */
    attack(character: Character): void;
} 



/**
 *  Classe abstraite représentant un personnage
 *  @name Character
 */
export abstract class Character implements Attaquant {
    // 1. arme: Arme = { puissance: 10, nom: 'arme' };
    // 3. arme: Arme | undefined; => la mieux si on ne connait pas la valeur par défaut
    arme: ArmeOrUndefined;
    // arme !: Arme;
    // 4. arme !: Arme; bypass, attention, prudence
    
    // 2. constructor(public id: number, public prenom: string, public vie: Vie, arme: Arme) {
    //     this.arme = arme;
    // }

    constructor(public id: number, public prenom: string, public vie: Vie) {
        this.arme  = undefined;
    }
    

    /**
     * Attaque un personnage
     * @param character  Le personnage à attaquer 
     */
    attack(character: Character): void {
        if (! character) {
            throw new Error('Character is undefined');
        }

        // 3. typeguard avec exception
        if(! this.arme) {
            throw new Error('Character has no weapon');
        }
        character.vie.points -= this.arme.puissance;

        // 1. typeguard
        // if (this.arme) { // type guard simple
        //     character.vie.points -= this.arme.puissance;
        // }
        
        // 2. typeguard
        // let puissance = this.arme?.puissance; // type guard avec opérateur de défaut

        console.log(`${this.prenom} attaque ${character.prenom} !`);
    }
}

//export default Character;