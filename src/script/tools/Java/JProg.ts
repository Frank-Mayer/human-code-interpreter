import type { JClass } from "./JClass";
import javaToJs from "java-to-javascript/lib";
import { JSystem } from "./JSystem";

export class JProg {
    readonly jClasses: JClass[];
    readonly mainClass: JClass;
    readonly java: string;
    readonly js: () => string;
    readonly system: JSystem;

    constructor(mainClass: JClass, ...jClasses: JClass[]) {
        if (
            mainClass.methods.find(
                (m) => m.name === "main" && m.modifiers.has("static")
            ) === undefined
        ) {
            throw new Error(
                `Main class ${mainClass.name} does not have a static main method.`
            );
        }

        this.mainClass = mainClass;
        this.jClasses = jClasses;
        this.system = new JSystem();

        this.java =
            [this.mainClass, ...this.jClasses]
                .map((jClass) => jClass.toString())
                .join("\n") + "\n";

        try {
            const js = new Function(
                "System",
                "ArrayList",
                javaToJs(this.java) + `\n${mainClass.name}.main([]);`
            );

            this.js = () => {
                js(this.system, Array);
                return this.system.out.history;
            };
        } catch (e) {
            console.error(e, this.java);
            this.js = () => `Error "${e.name}"\n${e.message}`;
        }
    }
}
