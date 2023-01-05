import { JClass } from "../JClass";
import { JMethod } from "../JMethod";
import { JParameter } from "../JParameter";
import { JProg } from "../JProg";
import { tab } from "../tab";
import { getVarNames, pickRandom, rInt } from "./tools";

const randomCodeHard_001 = (): JProg => {
    const varNames = getVarNames();

    const max = rInt(5, 10);

    return new JProg(
        ["import java.util.ArrayList;"],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `var ${varNames[0]} = new ArrayList<Integer>(${max});`,
                    `var ${varNames[1]} = -1;`,
                    "",
                    `while(${varNames[1]} < ${max - 1}) {`,
                    `${tab}${varNames[0]}[++${varNames[1]}] = ${varNames[1]};`,
                    `}`,
                    "",
                    `for(${varNames[1]} = 0; ${varNames[1]} < ${max}; ${varNames[1]}++) {`,
                    `${tab}System.out.println(${varNames[0]}[${varNames[1]}]);`,
                    `}`,
                ].join("\n")
            ),
        ])
    );
};

const randomCodeHard_002 = (): JProg => {
    const varNames = getVarNames();

    const max = rInt(5, 10);

    return new JProg(
        ["import java.util.ArrayList;"],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `var ${varNames[0]} = new ArrayList<Integer>(${max});`,
                    `var ${varNames[1]} = -1;`,
                    "",
                    `while(${varNames[1]} < ${max - 1}) {`,
                    `${tab}${varNames[0]}[++${varNames[1]}] = ${varNames[1]} % 2;`,
                    `}`,
                    "",
                    `for(${varNames[1]} = 0; ${varNames[1]} < ${max}; ${varNames[1]}++) {`,
                    `${tab}System.out.println(${varNames[0]}[${varNames[1]}]);`,
                    `}`,
                ].join("\n")
            ),
        ])
    );
};

export const randomCodeHard = (): JProg => {
    return pickRandom(randomCodeHard_001, randomCodeHard_002)();
};