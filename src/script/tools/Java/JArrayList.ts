export class ArrayList<E> extends Array<E> {
    constructor() {
        super();
    }

    add(e: E) {
        this.push(e);
    }

    remove(index: number) {
        this.splice(index, 1);
    }

    get(index: number) {
        return this[index];
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this.splice(0, this.length);
    }

    contains(e: E) {
        return this.indexOf(e) !== -1;
    }
}
