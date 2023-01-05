import { JClass } from "../JClass";
import { JMethod } from "../JMethod";
import { JParameter } from "../JParameter";
import { JProg } from "../JProg";
import { tab } from "../tab";
import { getVarNames, pickRandom, rInt } from "./tools";

const randomCodeEasy_001 = (): JProg => {
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
                    `int ${varNames[0]} = ${rInt(0, 5)};`,
                    `int ${varNames[1]} = ${rInt(0, 5)};`,
                    `int ${varNames[2]} = ${rInt(0, 5)};`,
                    `${varNames[0]} = ${varNames[0]} + ${varNames[1]};`,
                    `${varNames[1]} = ${varNames[0]} + ${varNames[2]};`,
                    `${varNames[2]} = ${varNames[0]} + ${varNames[1]};`,
                    "",
                    `System.out.println(${varNames[1]});`,
                ].join("\n")
            ),
        ])
    );
};

const randomCodeEasy_002 = (): JProg => {
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
                    "String animals[] = {",
                    `${tab}"${varNames[0]}",`,
                    `${tab}"${varNames[1]}",`,
                    `${tab}"${varNames[2]}",`,
                    `${tab}"${varNames[3]}",`,
                    `${tab}"${varNames[4]}"`,
                    "};",
                    "",
                    `System.out.println(animals[${rInt(0, 4)}]);`,
                ].join("\n")
            ),
        ])
    );
};

const randomCodeEasy_003 = (): JProg => {
    const varNames = getVarNames();
    const count = rInt(6, 11);
    const index = rInt(2, count - 3);

    const body = [`ArrayList<String> animals = new ArrayList<>(${count});`];

    for (let i = 0; i < count; i++) {
        body.push(`animals.add("${varNames[i]}");`);
    }

    body.push("");
    body.push(`animals.remove(${rInt(index - 1, index + 1)});`);
    body.push("");
    body.push(`System.out.println(animals.get(${index}));`);

    return new JProg(
        ["import java.util.ArrayList;"],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                body.join("\n")
            ),
        ])
    );
};

const randomCodeEasy_004 = (): JProg => {
    const varNames = getVarNames();
    const value = rInt(6, 19);
    const a = rInt(6, 19);
    const b = rInt(6, 19);

    return new JProg(
        [],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `int i = ${value};`,
                    "",
                    `if (i >= ${a}) {`,
                    `${tab}System.out.println("${varNames[1]}");`,
                    "}",
                    `else if (i <= ${b}) {`,
                    `${tab}System.out.println("${varNames[2]}");`,
                    "}",
                    `else {`,
                    `${tab}System.out.println("${varNames[3]}");`,
                    "}",
                ].join("\n")
            ),
        ])
    );
};

const randomCodeEasy_005 = (): JProg => {
    const start = rInt(0, 2);
    const end = start + rInt(4, 6);

    return new JProg(
        [],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `for (int i = ${start}; i <= ${end}; i++) {`,
                    `${tab}System.out.println(i);`,
                    "}",
                ].join("\n")
            ),
        ])
    );
};

export const randomCodeEasy = (): JProg => {
    return pickRandom(
        randomCodeEasy_001,
        randomCodeEasy_002,
        randomCodeEasy_003,
        randomCodeEasy_004,
        randomCodeEasy_005
    )();
};
