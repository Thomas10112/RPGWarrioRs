class Action {
    #name;
    #type;
    #cout;

    constructor (name, type, cout) {
        this.#name = name;
        this.#type = type;
        this.#cout = cout;
    }
    getName () {
        console.log (`Tu as choisi le coup ${this.#name}`);
    }
    
}