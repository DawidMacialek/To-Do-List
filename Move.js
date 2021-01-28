class Move {
    constructor() {
        this.listDone = [];
    }
    addToListDone(value) {
        let taskDone = value;
        this.listDone.push(value);
    }
}

const move = new Move();