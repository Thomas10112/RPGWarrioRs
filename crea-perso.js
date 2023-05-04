// On déclare une variable qui stock les points que l'utilisateur
// va répartir entre la vie et les points d'actions
let limitePoint = 50;

// On commence par créer la classe personnage parent qui servira de squelette
// pour nos classes spécifiques de personnages
class Character {
    #name;
    #life;
    #type;
    constructor(name, type = null, life = 30) {
        this.#name = name;
        this.#life = life;
        this.#type = type;
    };
    getName() {
        return this.#name;
    };

    // Avec le setName on permet à l'utilisateur de définir un nom
    // à son personnage
    setName(name) {
        this.#name = name;
        console.log(`My name is ${this.#name}`);
    };
    getLife() {
        return this.#life;
    };

    // l'utilisateur défini la vie de son personnage avec une limite minimum 
    // de 30 et maximum de 40
    setLife(life) {
        if(life < 30 || life > 40) {
            console.log('Life cannot be less than 30 or more than 40');
            // Rappel de la fonction setLife() si mauvaise valeur
            // rentrée
        } else {
            this.#life = life;
            console.log(`My life is ${this.#life}`);
        };
    };
    getType() {
        console.log(`My type is ${this.#type}`);
        return this.#type;
    };
};
const myCharacter = new Character();
console.log(myCharacter);

// On crée la première classe de personnage qui est
// de type Wizard
class Wizard extends Character {
    #mana
    constructor(name, type = 'Wizard', life, mana = null) {
        super(name, type, life);
        this.#mana = mana;
    };

    getMana() {
        return this.#mana;
    };

    // le mana est définit grâce au nombre limite de points 
    // auxquel on enlève les points de vie définit avant par
    // l'utilisateur
    howManyMana() {
        this.#mana = limitePoint - this.getLife();
        console.log(`Mana is ${this.#mana}`);
    };
};
const myWizard = new Wizard('Sirius Black');
console.log(myWizard);
myWizard.getName();
myWizard.getLife();
// myWizard.setLife();
myWizard.getLife();
myWizard.getType();
myWizard.howManyMana();
// console.log(myWizard.getLife() - myWizard.getMana());

// Création de la classe personnage de type Warrior
class Warrior extends Character {
    #strength
    constructor(name, type = 'Warrior', life, strength = null) {
        super(name, life, type);
        this.#strength = strength;
    };

    getStrength() {
        return this.#strength;
    };

    // la force est définit grâce au nombre limite de points 
    // auxquel on enlève les points de vie définit avant par
    // l'utilisateur
    howManyStrength() {
        this.#strength = limitePoint - this.getLife();
        console.log(`Strength is ${this.#strength}`);
    };
};

const myWarrior = new Warrior('Kratos');
console.log(myWarrior);
myWarrior.setLife(40);
myWarrior.howManyStrength();

// Création de la dernière classe de personnage qui est de type Archer
class Archer extends Character {
    #dexterity
    constructor(name, type = 'Archer', life, dexterity = null) {
        super(name, type, life);
        this.#dexterity = dexterity;
    };

    getDexterity() {
        return this.#dexterity;
    };

    // la dextérité est définit grâce au nombre limite de points 
    // auxquel on enlève les points de vie définit avant par
    // l'utilisateur
    howManyMana() {
        this.#dexterity = limitePoint - this.getLife();
        console.log(`Dexterity is ${this.#dexterity}`);
    };
};

const myArcher = new Archer('Legolas');
console.log(myArcher);
myArcher.setLife(38);
myArcher.howManyMana();
