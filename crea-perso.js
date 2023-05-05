/***********************************************************
 *                   FIXTURE DATA POUR TESTS               *
 ***********************************************************/


/************** FIN DES FIXTURES   **************/ 



/***********************************************************
 *             CONFIGURATION DE L'AUBERGE                  *
 ***********************************************************/

// Permet le calcul final des points d'actions en fonction de la vie définie
const limitePoint = 50; // @var {number} limitePoint
// Point minimum de vie à l'initialisation
const lifeInitMinPoint = 30; // @var {number} lifeInitMinPoint
// Point maximum de vie à l'initialisation
const lifeInitMaxPoint = 40;// @var {number} lifeInitMaxPoint
// Combien de nouveaux Personnages ?
const howManyNewCharacters= 2; // @var {number} howManyNewCharacters
// Nombre de Joueur
const fighters = {};
// Les Personnages disponible à l'auberge
const characterModels = [
    {
        uid: 1,
        name: 'Wizard',
        type: 'wizard',
        initClass: 'Wizard',
        description: "The Wizard is bla bla bla"
    },
    {
        uid: 2,
        name: 'Warrior',
        type: 'warrior',
        initClass: 'Warrior',
        description: "The Warrior is bla bla bla"
    },
    {
        uid: 3,
        name: 'Archer',
        type: 'archer',
        initClass: 'Archer',
        description: "The Archer is bla bla bla"
    },
]

// Créer une chaine de caractère à envoyer dans le prompt pour le choix du nom du perso
const nameChoiceSentence = 'Veuillez choisir un nom'
// Créer une chaine de caractère à envoyer dans le prompt pour le choix de la vie du perso
const lifeChoiceSentence = 'Veuillez choisir un niveau de vie entre 30 et 40'
// Créer une chaine de caractère à envoyer dans le prompt pour le choix du type de perso
let characterChoiceSentence = 'Veuillez choisir un type de personnage'
characterModels.forEach(el => {
    characterChoiceSentence = `${characterChoiceSentence} \n ${el.uid} : ${el.name} => DESCRIPTION : ${el.description}`
});

/***********************************************************
 *        CLASS Character => Instanciation des Character   *
 * la classe personnage parent qui servira de squelette    *
 * pour nos classes spécifiques de personnages             *
 ***********************************************************/
class Character {
    // @var uid {string|number} unique
    #uid;
    // @var name {string}
    #name;
    // @var life {number}
    #life;
    // @var type {string}
    #type;
    // @var actions {array}
    #actions = [];

    /* constructor(name, type, life)
    *  @param {string} name
    *  @param {number} life
    */
    constructor(name, life = 30) {
        this.#name = name;
        this.#life = this.initLife(life);
        this.#uid = `fighter_${Date.now()}`
    };

    /* getUid()
    *  @return {string} uid
    */
    getUid() {
        return this.#uid;
    };
    /* getName()
    *  @return {string} name
    */
    getName() {
        return this.#name;
    };
    /* setName(name)
    *  @param {string} name
    */
    setName(name) {
        this.#name = name;
        console.log(`My name is ${this.#name}`);
    };

    /* getLife()
    *  @return {number} life
    */
    getLife() {
        return this.#life;
    };
    /* setLife(life)
    *  @param {number} life
    */
    setLife(life) {
        this.#life = life;
    };
    /* initLife(life)
    *  @param {number} life
    *  Défini la vie de son personnage avec une limite minimum de 30 et maximum de 40
    */
    initLife(life) {
        if(life < lifeInitMinPoint || life > lifeInitMaxPoint) {
            console.log('Life cannot be less than 30 or more than 40');
        } else {
            this.#life = life;
           return this.#life;
        };
    };

    /* getType()
    *  @return {string} type
    */
    getType() {
        console.log(`My type is ${this.#type}`);
        return this.#type;
    };
    /* setType(type)
    *  @param {string} type
    */
    setType(type) {
        this.#type = type;
    };
    /* getActions()
    *  @return {array} actions
    */

    getActions() {
        return this.#actions;
    };
    /* setAction(action)
    *  @param {object} action
    */
    setAction(action) {
        this.#actions.push(action);
    };
};

/***********************************************************
 *        CLASS Wizard => Instanciation des Wizard         *
 *       la classe fille Wizard hérite de Character        *
 ***********************************************************/
class Wizard extends Character {

    // @var mana {number}
    #mana
    
    /* constructor(name, type, life, mana)
    *  @param {string} name
    *  @param {number} life
    */
    constructor(name, life) {
        super(name, life);
        this.#mana = limitePoint - this.getLife();
        this.setType('Wizard');
    };

    /* getMana()
    *  @return {number} mana
    */
    getMana() {
        return this.#mana;
    };
    /* setMana(mana)
    *  @param {number} mana
    */
    setMana(mana) {
        this.#mana = mana;
    };
};

/***********************************************************
 *       CLASS Warrior => Instanciation des Warriors       *
 *       la classe fille Warrior hérite de Character       *
 ***********************************************************/
class Warrior extends Character {

    // @var strength {number}
    #strength

    /* constructor(name, type, life, strength)
    *  @param {string} name
    *  @param {number} life
    */
    constructor(name, life) {
        super(name, life);
        this.#strength = limitePoint - this.getLife();
        this.setType('Warrior');
    };

    /* getStrength()
    *  @return {number} strength
    */
    getStrength() {
        return this.#strength;
    };
    /* setStrength(strength)
    *  @param {number} strength
    */
    setStrength(strength) {
        this.#strength = strength;
    };
};

/***********************************************************
 *        CLASS Archer => Instanciation des Archers        *
 *       la classe fille Archer hérite de Character        *
 ***********************************************************/
class Archer extends Character {

    // @var strength {dexterity}
    #dexterity

    /* constructor(name, type, life, strength)
    *  @param {string} name
    *  @param {number} life
    */
    constructor(name, life) {
        super(name, life);
        this.#dexterity = limitePoint - this.getLife();
        this.setType('Archer');
    };

    /* getDexterity()
    *  @return {number} dexterity
    */
    getDexterity() {
        return this.#dexterity;
    };

    /* setDexterity(strength)
    *  @param {number} strength
    */
    setDexterity(dexterity) {
        this.#dexterity = dexterity;
    };
};

const characterClasses = {
    "wizard": Wizard,
    "warrior": Warrior,
    "archer": Archer,
}




/***********************************************************
 *  ALGO init_character => Instanciation des Personnages   *
 *                 l'ouverture de l'auberge                *
 ***********************************************************/


/* initCharacter()
*  Permet la création de personnage
*/
function initCharacter() {
    let characterName = prompt(nameChoiceSentence);
    if(characterName != "") {
        characterName;
    } else {
        initCharacter();
    };

    let typeChoice = prompt(characterChoiceSentence);
    if(typeChoice != "" /* && typeof typeChoice == "number" */ && typeChoice > 0 && typeChoice <= characterModels.length) {
        typeChoice;
    } else {
        console.log(typeof typeChoice)
        console.log('Select a valid choice Stupid !')
        initCharacter();
    };

    let characterLife = prompt(lifeChoiceSentence);
    if(characterLife != "" /* && typeof characterLife == "number" */  && characterLife >= lifeInitMinPoint && characterLife <= lifeInitMaxPoint) {
        characterLife;
    } else {
        console.log(`Select a valid choice for life ! Between ${lifeInitMinPoint} and ${lifeInitMaxPoint}` )
        initCharacter();
    };
    let characterType = null
    // Filtrer le tableau et récupérer le type de perso en fonction de l'uid
    characterModels.filter(function (object) {
        if (object.uid == typeChoice) {
            characterType = object.type;
        }
    });
    
    // Créer dynamiquement le perso en appelant la bonne fonction
    const newCharacter = new characterClasses[characterType](characterName, characterLife)
    console.log(newCharacter);
    return newCharacter;
};

/* startgame()
*  Bah State le game
*/
function startGame() {
    for (let i = 0; i < howManyNewCharacters; i++) {
        console.log(` Player ${i + 1} It's your turn to create your FIGHTER !!!` )
        fighters[`fighter${i + 1}`] = initCharacter()
    }
    console.log(fighters)
}

startGame()



/***********************************************************
 *                         TESSSSTTTEEEUH                  *
 ***********************************************************/

/* const myWizard = new Wizard('Sirius Black');
console.log(myWizard);
myWizard.getName();
myWizard.getLife();
myWizard.setLife();
myWizard.getLife();
myWizard.getType();
myWizard.howManyMana();
console.log(myWizard.getLife() - myWizard.getMana());
*/

/* const myWarrior = new Warrior('Kratos');
console.log(myWarrior);
myWarrior.setLife(40);
myWarrior.howManyStrength();
*/

/*const myArcher = new Archer('Legolas');
console.log(myArcher);
myArcher.setLife(38);
myArcher.howManyMana();
*/

/*
 switch(typeChoice) {
        case 'Wizard': 
            newCharacter = new Wizard(characterName, typeChoice, characterLife);
        break;
        case 'Warrior': 
            newCharacter = new Warrior(characterName, typeChoice, characterLife);
        break;
        case 'Archer': 
            newCharacter = new Archer(characterName, typeChoice, characterLife);
        break;
        default:

    };
*/