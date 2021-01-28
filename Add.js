class Add {
    constructor() {
        this.listToDo = [];
    }

    addToList(value) {
    let thingToDo = value;
    
    this.listToDo.push(thingToDo);
    }
}

const add = new Add()