/**
 * Exemple d'appel d'un bouton HTML
 */
const button: HTMLButtonElement | null = document.querySelector("#button") ;

button?.addEventListener('click', () => {
    console.log('click');
});

// *********************************************************************************************************************
type Afficher = (message: string) => void;
type TestNumber = number;

class Composant {
    //click(afficher: Function): void {
    click(afficher: Afficher): void {
        afficher('click');
        afficher.call(this, 'click');
    }
}

const composant = new Composant();
composant.click((message: string) => {
    console.log('Ah que johny', message);
});

composant.click((message: string) => {
    console.log('Ah que johny oh yeah', message);
});

composant.click(() => {
    console.log('Ah que johny sans message');
});
// composant.click(1);

/// *********************************************************************************************************************

interface Voler {
    voler(): void;
}

class Personne implements Voler {
    constructor(public nom: string, public prenom: string) {}

    voler(): void {
        console.log('Je vole');
    }
  // manger() {}
}

function faireVoler(voler: Voler): void {
    voler.voler();
}

faireVoler(new Personne('Leia', 'Organa'));

faireVoler({
    voler: () => {
        console.log('Je vole');
    }
});

const monObjet: Voler = { 
    voler: () => {
        console.log('Je vole');
    }
};
faireVoler(monObjet);

const personne = new Personne('Doe', 'John');
const personne2 = {
    age: 15,
    nom: 'Doe',
    prenom: 'John',
};
const personne3: Personne = {
    nom: 'Doe',
    prenom: 'John',
    voler: () => {
        console.log('Je vole');
    }
    // manger: () => {},
};

export type NomPrenom = { nom: string, prenom: string };
function afficherInfosPersonne(personne: NomPrenom): void {
    console.log(personne.nom, personne.prenom);
}

afficherInfosPersonne(personne);
afficherInfosPersonne(personne2);
afficherInfosPersonne(personne3);

// *********************************************************************************************************************

interface RamenerDonnees {
    getData(): string[];
}

function afficherTableau(service: RamenerDonnees): void {
    const donnees = service.getData();
    
    const tableau = document.getElementById('tableau');
    if (tableau) {
        let html = '<table>';
        for (const donnee of donnees) {
            html += `<tr><td>${donnee}</td></tr>`;
        }
        html += '</table>';
        tableau.innerHTML = html;
    }
}
const servicePeople: RamenerDonnees = {
    getData: () => {
        return ['Luke', 'Leia', 'Han'];
    }
};
afficherTableau(servicePeople);

const servicePlanetes: RamenerDonnees = {
    getData: () => {
        return ['Tatooine', 'Alderaan', 'Hoth'];
    }
};
afficherTableau(servicePlanetes);