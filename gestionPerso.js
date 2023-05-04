/***********************************************************
 *                   FIXTURE DATA POUR TESTS               *
 ***********************************************************/
const archer = {
    name: "Degolas",
    dexterity: 20,
    type: "archer",
    actions: [],
    getName: () => {
        return this.name
    },
    getDexterity: () => {
        return this.dexterity
    },
    getType: () => {
        return this.type
    },
    getActions: () => {
        return this.actions
    },
    setAction: (action) => {
        this.actions.push(action)
    }
}
const warrior = {
    name: "Popcorn",
    force: 20,
    type: "warrior",
    actions: [],
    getName: () => {
        return this.name
    },
    getForce: () => {
        return this.force
    },
    getType: () => {
        return this.type
    },
    setAction: (action) => {
        this.actions.push(action)
    }
}
const wizzard = {
    name: "Glandelf",
    dexterity: 20,
    type: "wizzard",
    actions: [],
    getName: () => {
        return this.name
    },
    getMana: () => {
        return this.mana
    },
    getType: () => {
        return this.type
    },
    setAction: (action) => {
        this.actions.push(action)
    }
}
// Contenu du Magasin : Les Items Actions
const actions = [
    {
        name: 'Fleche de feu',
        type: 'dexterity',
        coast: 5,
        damage: 5
    },
    {
        name: 'Point de feu',
        type: 'force',
        coast: 5,
        damage: 5
    },
    {
        name: 'Boule de feu',
        type: 'mana',
        coast: 5,
        damage: 5
    },
    {
        name: 'Fleche d\'argent',
        type: 'dexterity',
        coast: 10,
        damage: 10
    },
    {
        name: 'Point  d\'argent',
        type: 'force',
        coast: 10,
        damage: 10
    },
    {
        name: 'Boule  d\'argent',
        type: 'mana',
        coast: 10,
        damage: 10
    },
    {
        name: 'Fleche d\'or',
        type: 'dexterity',
        coast: 15,
        damage: 15
    },
    {
        name: 'Point  d\'or',
        type: 'force',
        coast: 15,
        damage: 15
    },
    {
        name: 'Boule  d\'or',
        type: 'mana',
        coast: 15,
        damage: 15
    }
]
let character = wizzard;
/************** FIN DES FIXTURES   **************/ 

/***********************************************************
 *         CLASS Action => Instanciation des Actions       *
 ***********************************************************/
class Action {
    #uniqId;
    #name;
    #type;
    #coast;
    #damage;

    constructor (uniqId,name, type, coast, damage) {
        this.#uniqId = uniqId;
        this.#name = name;
        this.#type = type;
        this.#coast = coast;
        this.#damage = damage;
    }
    getUniqId () {
        return this.#uniqId;
    }
    setUniqId (uniqId) {
        this.#uniqId = uniqId
    }
    getName () {
        return this.#name;
    }
    setName (name) {
        this.#name = name
    }
    getType() {
        return  this.#type;
    }
    setType (type) {
        this.#type = type
    }
    getCoast () {
        // ici j'aurais mon switch pour le choix des coups
        return this.#coast;
    }
    setCoast (coast) {
        this.#coast = coast
    }
    getDamage () {
        // ici faire la fonction de dégat de base sans le coefficient multiplicateur
        return this.#damage;
    }
    setDamage (damage) {
        this.#damage = damage
    }
}


/***********************************************************
 *                    ALGO CREATION MAGASIN                *
 ***********************************************************/


// Les nouvelles actions selectionnés
const newActions = [];
// Les nouvelles actions selectionnés
const howManyNewActions = 2;

// Traiter le tableau actions[] et récupérer les items en fonction du personnage. 
// @var : character
 const magasinActionItemsForCharacter = actions.map()


// Instancier les actions via une boucle et la class Action
// const magasinActionItemsForCharacter = la boucle filtré sur actions[]



// Créer une chaine de caractère à envoyer dans le prompt basé sur : 
// ${action.uniqId} : ${action.name}
let sentence = ''
actions.forEach(el => {
    sentence = `${sentence} \n ${el.coast} : ${el.name} => COAST : ${el.coast} points | DAMAGE : ${el.damage}`
});
console.log(sentence)


/***********************************************************
 *           ALGO RECUPERATION CHOIX UTILISATEUR           *
 ***********************************************************/

// POMPT DISPLAYER
function promptDisplay() {
    let userChoice = prompt(sentence);
    return userChoice;
}
// Permet d'afficher un prompt et de vérifier les donnéee et d'ajouter l'actions au actions du personnage
function actionSelector() {
    // AFICHAGE DU PROMPT
    promptDisplay()
    // VERIFICATION DES DONNES

    // Verifier que l'uniquId selectionné existe sinon on réafiche le prompt

    // ajout de l'actions au actions du personnage


    // ajout de l'actions à newActions[]
}

for (let i = 0; i < howManyNewActions; i++) {
    actionSelector()
}

// Afficher nouvelles actions de l'utilisateur via : 
// exemple => newActions[0].name (une boucle par exemple)
//console.log();


console.log(actions.getName())