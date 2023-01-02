import { JClass } from "../Java/JClass";
import { JMethod } from "../Java/JMethod";
import { JParameter } from "../Java/JParameter";
import { JProg } from "../Java/JProg";
import { getVarNames, pickRandom, rInt } from "./tools";

const randomCodeEasy_001 = (): JProg => {
    const varNames = getVarNames();

    return new JProg(
        new JClass("Main", [
            new JMethod(
                ["static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `int ${varNames[0]} = ${rInt(0, 10)};`,
                    `int ${varNames[1]} = ${rInt(0, 10)};`,
                    `int ${varNames[2]} = ${rInt(0, 10)};`,
                    `${varNames[0]} = ${varNames[0]} + ${varNames[1]};`,
                    `${varNames[1]} = ${varNames[0]} + ${varNames[2]};`,
                    `${varNames[2]} = ${varNames[0]} + ${varNames[1]};`,
                    `\nSystem.out.println(${varNames[1]});`,
                ].join("\n")
            ),
        ])
    );
};

const randomCodeEasy_002 = (): JProg => {
    const varNames = getVarNames();

    return new JProg(
        new JClass("Main", [
            new JMethod(
                ["static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `int ${varNames[0]} = ${rInt(1, 4)};`,
                    `int ${varNames[1]} = ++${varNames[0]};`,
                    `int ${varNames[2]} = ${varNames[1]}++;`,
                    `int ${varNames[3]} = ${varNames[2]}--;`,
                    `int ${varNames[4]} = --${varNames[3]};`,
                    `${varNames[0]} *= ${varNames[2]}++;`,
                    "",
                    "System.out.printf(",
                    '"%d %d %d %d %d",',
                    `${varNames[0]},`,
                    `${varNames[1]},`,
                    `${varNames[2]},`,
                    `${varNames[3]},`,
                    `${varNames[4]}`,
                    ");",
                ].join("\n")
            ),
        ])
    );
};

export const randomCodeEasy = (): JProg => {
    return pickRandom(randomCodeEasy_001, randomCodeEasy_002)();
};
