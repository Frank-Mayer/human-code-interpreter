import { JClass } from "../Java/JClass";
import { JMethod } from "../Java/JMethod";
import { JParameter } from "../Java/JParameter";
import { JProg } from "../Java/JProg";
import { getVarNames, pickRandom, rInt } from "./tools";

const randomCodeHardcore_001 = (): JProg => {
    const varNames = getVarNames();

    return new JProg(
        [],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `int ${varNames[0]} = ${rInt(0, 100)};`,
                    `int ${varNames[1]} = ${rInt(0, 100)};`,
                    `String ${varNames[2]} = "Help!";`,
                    `${varNames[0]} = ${varNames[1]} + ${varNames[2]};`,
                    `${varNames[2]} = ${rInt(30, 110)} % ${varNames[1]};`,
                    `${varNames[1]} = ${varNames[0]} + ${varNames[2]};`,
                    `\nSystem.out.println(${varNames[1]});`,
                ].join("\n")
            ),
        ])
    );
};

export const randomCodeHardcore = (): JProg => {
    return pickRandom(randomCodeHardcore_001)();
};
