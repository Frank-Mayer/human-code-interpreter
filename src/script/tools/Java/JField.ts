import type { JVarType } from "./JVarType";
import type { JModifier } from "./JModifier";

export class JField {
    readonly modifiers: Set<JModifier>;
    readonly name: string;
    readonly type: JVarType;
    value: any;

    constructor(
        modifiers: Iterable<JModifier> | undefined,
        name: string,
        type: JVarType
    ) {
        this.modifiers = new Set(modifiers);
        this.name = name;
        this.type = type;
    }

    toString() {
        const mod =
            this.modifiers.size > 0
                ? Array.from(this.modifiers).join(" ")
                : "public";

        return `${mod} ${this.type} ${this.name};`;
    }
}
