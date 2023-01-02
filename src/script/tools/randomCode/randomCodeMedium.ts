import { JClass } from "../Java/JClass";
import { JMethod } from "../Java/JMethod";
import { JParameter } from "../Java/JParameter";
import { JProg } from "../Java/JProg";
import { getVarNames, pickRandom, rInt } from "./tools";

const randomCodeMedium_001 = (): JProg => {
    const varNames = getVarNames();
    const max = rInt(5, 10);

    return new JProg(
        new JClass("Main", [
            new JMethod(
                ["static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `var ${varNames[0]} = new ArrayList<Integer>(${max});`,
                    `var ${varNames[1]} = -1;`,
                    "",
                    `while(${varNames[1]} < ${max - 1}) {`,
                    `${varNames[0]}[++${varNames[1]}] = ${varNames[1]};`,
                    `}`,
                    "",
                    `for(${varNames[1]} = 0; ${varNames[1]} < ${max}; ${varNames[1]}++) {`,
                    `System.out.println(${varNames[0]}[${varNames[1]}]);`,
                    `}`,
                ].join("\n")
            ),
        ])
    );
};

export const randomCodeMedium = (): JProg => {
    return pickRandom(randomCodeMedium_001)();
};
