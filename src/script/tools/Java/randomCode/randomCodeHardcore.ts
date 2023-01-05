import { JClass } from "../JClass";
import { JMethod } from "../JMethod";
import { JParameter } from "../JParameter";
import { JProg } from "../JProg";
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
