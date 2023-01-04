import type { JField } from "./JField";
import type { JMethod } from "./JMethod";
import { tab } from "./tab";

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
            `class ${this.name} {\n` +
            [
                ...this.fields.map((f) => tab + f.toString()),
                ...this.methods.map((m) => m.toString()),
            ].join("\n\n") +
            "\n}"
        );
    }
}
