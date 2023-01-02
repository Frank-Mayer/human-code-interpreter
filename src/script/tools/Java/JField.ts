import type { JVarType } from "./JVarType";

export class JField {
    readonly name: string;
    readonly type: JVarType;
    value: any;

    constructor(name: string, type: JVarType) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return `${this.type} ${this.name};`;
    }
}
