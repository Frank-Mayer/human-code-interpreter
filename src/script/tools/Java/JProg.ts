import type { JClass } from "./JClass";
import javaToJs from "java-to-javascript/lib";
import { JSystem } from "./JSystem";
import { ArrayList } from "./JArrayList";

export class JProg {
    readonly imports: string[];
    readonly jClasses: JClass[];
    readonly mainClass: JClass;
    readonly java: string;
    readonly js: () => string;
    readonly system: JSystem;

    constructor(
        imports: Array<string>,
        mainClass: JClass,
        ...jClasses: JClass[]
    ) {
        if (
            mainClass.methods.find(
                (m) => m.name === "main" && m.modifiers.has("static")
            ) === undefined
        ) {
            throw new Error(
                `Main class ${mainClass.name} does not have a static main method.`
            );
        }

        this.imports = imports;
        this.mainClass = mainClass;
        this.jClasses = jClasses;
        this.system = new JSystem();

        this.java =
            (this.imports.length != 0
                ? this.imports.join("\n") + "\n\n\n"
                : "") +
            [this.mainClass, ...this.jClasses]
                .map((jClass) => jClass.toString())
                .join("\n") +
            "\n";

        try {
            const js = new Function(
                "System",
                "ArrayList",
                javaToJs(this.java) + `\n${mainClass.name}.main([]);`
            );

            console.debug(js.toString());

            this.js = () => {
                js(this.system, ArrayList);
                return this.system.out.history;
            };
        } catch (e) {
            console.error(e, this.java);
            this.js = () => `Error "${e.name}"\n${e.message}`;
        }
    }
}
