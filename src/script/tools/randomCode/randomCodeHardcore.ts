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
                ["// not finished"].join("\n")
            ),
        ])
    );
};

export const randomCodeHardcore = (): JProg => {
    return pickRandom(randomCodeHardcore_001)();
};
