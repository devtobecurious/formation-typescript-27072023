import Vie from './vie';

/**
 *  Classe abstraite représentant un personnage
 *  @name Character
 */
abstract class Character {
    constructor(public id: number, public prenom: string, public vie: Vie) {
    }

    /**
     * Attaque un personnage
     * @param character  Le personnage à attaquer 
     */
    attack(character: Character): void {
        if (! character) {
            throw new Error('Character is undefined');
        }
        character.vie.points -= 10;
        console.log(`${this.prenom} attaque ${character.prenom} !`);
    }
}

export default Character;