import type { JVarType } from "./JVarType";

export class JParameter {
    readonly name: string;
    readonly type: JVarType;

    constructor(name: string, type: JVarType) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return `${this.type} ${this.name}`;
    }
}
