import { Character } from "./character";

export class StormTrooper extends Character {
    constructor(id: number, prenom: string) {
        super(id, prenom, { points: 100 });
    }
}