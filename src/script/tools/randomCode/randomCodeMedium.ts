import { JClass } from "../Java/JClass";
import { JMethod } from "../Java/JMethod";
import { JParameter } from "../Java/JParameter";
import { JProg } from "../Java/JProg";
import { tab } from "../Java/tab";
import { getVarNames, pickRandom, rInt } from "./tools";

const randomCodeMedium_001 = (): JProg => {
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
                    `int ${varNames[0]} = ${rInt(1, 4)};`,
                    `int ${varNames[1]} = ++${varNames[0]};`,
                    `int ${varNames[2]} = ${varNames[1]}++;`,
                    `int ${varNames[3]} = ${varNames[2]}--;`,
                    `int ${varNames[4]} = --${varNames[3]};`,
                    `${varNames[0]} *= ${varNames[2]}++;`,
                    "",
                    "System.out.printf(",
                    tab + '"%d %d %d %d %d",',
                    `${tab}${varNames[0]},`,
                    `${tab}${varNames[1]},`,
                    `${tab}${varNames[2]},`,
                    `${tab}${varNames[3]},`,
                    `${tab}${varNames[4]}`,
                    ");",
                ].join("\n")
            ),
        ])
    );
};

const randomCodeMedium_002 = (): JProg => {
    const start = rInt(0, 2);
    const end = start + rInt(4, 6);
    const step = rInt(1, 3);

    return new JProg(
        [],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `for (int i = ${start}; i <= ${end}; i += ${step}) {`,
                    `${tab}System.out.println(i);`,
                    "}",
                ].join("\n")
            ),
        ])
    );
};

const randomCodeMedium_003 = (): JProg => {
    const start = rInt(15, 17);
    const end = start - rInt(6, 8);
    const step = rInt(1, 3);

    return new JProg(
        [],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `for (int i = ${start}; i >= ${end}; i -= ${step}) {`,
                    `${tab}System.out.println(i);`,
                    "}",
                ].join("\n")
            ),
        ])
    );
};

export const randomCodeMedium = (): JProg => {
    return pickRandom(
        randomCodeMedium_001,
        randomCodeMedium_002,
        randomCodeMedium_003
    )();
};
