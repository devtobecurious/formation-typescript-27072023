export class Yolo {
    private _name: string = '';

    constructor(name: string, 
                public angle: number = 1, 
                private _taillePoils: number = 1) {
        this.name = name; 
    }

    osef(): void {
        console.log("osef");
    }

    calculer(): number {
        return 1 + 1;
    }

    get taillePoils(): number {
        return this._taillePoils;
    }
    set taillePoils(value: number) {
        this._taillePoils = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {   
        this._name = value;
    }
}