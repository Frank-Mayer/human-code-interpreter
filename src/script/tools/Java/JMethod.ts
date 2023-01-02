import type { JClass } from "./JClass";
import type { JParameter } from "./JParameter";
import type { JVarType } from "./JVarType";
import { tab } from "./tab";

type JModifier = "public" | "private" | "protected" | "static" | "final";

export class JMethod {
    readonly modifiers: Set<JModifier>;
    readonly name: string;
    readonly returnType: JVarType;
    readonly parameters: JParameter[];
    readonly body: string;
    jClass: JClass | null;

    constructor(
        modifiers: Iterable<JModifier> | undefined,
        name: string,
        returnType: JVarType,
        parameters: Array<JParameter>,
        body: string
    ) {
        this.modifiers = new Set(modifiers);
        this.name = name;
        this.returnType = returnType;
        this.parameters = parameters;
        this.body = body;
        this.jClass = null;
    }

    toString() {
        return [
            [
                tab + [...this.modifiers].join(" "),
                this.returnType,
                this.name,
                "(" + this.parameters.map((p) => p.toString()).join(", ") + ")",
                "{",
            ].join(" "),
            this.body
                .split("\n")
                .map((line) => tab + tab + line.trimEnd())
                .join("\n"),
            tab + "}",
        ].join("\n");
    }
}
