import Character from "./character";
import Vie from "./vie";

export class Wookiee extends Character {
    constructor(id: number, prenom: string) {
        super(id, prenom, new Vie(100));
    }
}
