// Etape 01
// Préparer un wookiee pour le combat
// Créer une classe wookiee avec les propriétés suivantes :
// name: Chewbacca
// age: 900
// arme: arbalète

// Etape 02
// Ajouter une fonction de hurlement : hurler() dans le Wookiee
// Elle fera un console.log('Wroaaar');

class Wookiee {
    #name = '';
    #age = 0;
    #arme = '';

    constructor(name = '', age = 0 , arme = '') {
        this.name = name;
        this.age = age;
        this.arme = arme;
    }

    hurler(afficher) {
        if (typeof afficher === 'function') { // ca sera un type guard
            afficher('Wroaaar');
        }
    }

    //#region getter/setter
    get name() {
        return this.#name;
    }
    set name(value) {
        if (value.length < 2) {
            throw new Error('Le nom doit faire au moins 2 caractères');
        }
        this.#name = value;
    }
    get age() {
        return this.#age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error('L\'age doit être positif');
        }
        this.#age = value;
    }

    get arme() {
        return this.#arme;
    }
    set arme(value) {
        if (value.length < 2) {
            throw new Error('L\'arme doit faire au moins 2 caractères');
        }
        this.#arme = value;
    }
    //#endregion
}

let chewie = new Wookiee('Chewbacca', 900, 'arbalète');
chewie.hurler(function (message) {
    console.log(message, this);  // this === chewie
});

chewie.hurler(message => {
    console.log(message, this); // this === window
});

console.time('aupif');
chewie.hurler(message => console.warn(message));
console.timeEnd('aupif');

chewie.name = 'Chewie';
console.log(chewie.name);

chewie = 10;

const button = document.querySelector('#startGame');
button.addEventListener('click', function () {
    chewie.hurler(message => console.log(message));
});

// Etape 03
// instancier un Wookiee et faite le hurler

