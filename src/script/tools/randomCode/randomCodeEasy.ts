import { JClass } from "../Java/JClass";
import { JMethod } from "../Java/JMethod";
import { JParameter } from "../Java/JParameter";
import { JProg } from "../Java/JProg";
import { tab } from "../Java/tab";
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
                    "System.out.println(animals[1]);",
                ].join("\n")
            ),
        ])
    );
};

const randomCodeEasy_003 = (): JProg => {
    const varNames = getVarNames();
    const count = rInt(5, 10);
    const index = rInt(1, count - 3);

    const body = [`ArrayList<String> animals = new ArrayList<>(${count});`];

    for (let i = 0; i < count; i++) {
        body.push(`animals.add("${varNames[i]}");`);
    }

    body.push("");
    body.push(`animals.remove(${index});`);
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

export const randomCodeEasy = (): JProg => {
    return pickRandom(
        randomCodeEasy_001,
        randomCodeEasy_002,
        randomCodeEasy_003
    )();
};
