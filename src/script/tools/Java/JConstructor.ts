import { JMethod } from "./JMethod";
import type { JModifier } from "./JModifier";
import type { JParameter } from "./JParameter";
import { tab } from "./tab";

export class JConstructor extends JMethod {
    constructor(
        modifiers: Iterable<JModifier> | undefined,
        name: string,
        parameters: Array<JParameter>,
        body: string
    ) {
        super(modifiers, name, "void", parameters, body);
    }

    toString() {
        return [
            [
                tab + [...this.modifiers].join(" "),
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
