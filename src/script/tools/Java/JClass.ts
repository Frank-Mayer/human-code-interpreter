import type { JField } from "./JField";
import type { JMethod } from "./JMethod";

export class JClass {
    readonly name: string;
    readonly methods: JMethod[];
    readonly fields: JField[];

    constructor(name: string, methods: JMethod[] = [], fields: JField[] = []) {
        this.name = name;
        this.methods = methods.map((m) => {
            m.jClass = this;
            return m;
        });
        this.fields = fields;
    }

    toString() {
        return (
            `class ${this.name} {` +
            this.fields.map((f) => f.toString()).join("\n") +
            this.methods.map((m) => m.toString()).join("\n") +
            "}"
        );
    }
}
