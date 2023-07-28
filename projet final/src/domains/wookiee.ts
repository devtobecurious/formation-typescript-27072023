import { Character } from "./character";

export class Wookiee extends Character {
    constructor(id: number, prenom: string) {
        super(id, prenom, { points: 100 });
        //super(id, prenom, new Vie(100));
    }
}
