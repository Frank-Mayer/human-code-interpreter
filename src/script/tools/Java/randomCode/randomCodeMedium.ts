import { JClass } from "../JClass";
import { JConstructor } from "../JConstructor";
import { JField } from "../JField";
import { JMethod } from "../JMethod";
import { JParameter } from "../JParameter";
import { JProg } from "../JProg";
import { tab } from "../tab";
import {
    getBarkingSounds,
    getDogs,
    getVarNames,
    pickRandom,
    rInt,
} from "./tools";

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
    const step = rInt(2, 3);

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
    const step = rInt(2, 3);

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

const randomCodeMedium_004 = (): JProg => {
    const varNames = getDogs();
    const bark = getBarkingSounds();

    return new JProg(
        [],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `Dog ${varNames[0]} = new Dog();`,
                    `Dog ${varNames[1]} = new Dog("${bark[0]}");`,
                    `${varNames[0]}.bark();`,
                    `${varNames[1]}.bark();`,
                    `${varNames[0]}.setBark("${bark[1]}");`,
                    `${varNames[0]}.bark();`,
                    `${varNames[1]}.bark();`,
                    `${varNames[0]}.bark("${bark[2]}");`,
                ].join("\n")
            ),
        ]),
        [
            new JClass(
                "Dog",
                [
                    new JConstructor(
                        ["public"],
                        "Dog",
                        [new JParameter("bark", "String")],
                        "this.bark = bark;"
                    ),
                    new JConstructor(
                        ["public"],
                        "Dog",
                        [],
                        `this.bark = "${bark[2]}";`
                    ),
                    new JMethod(
                        ["public"],
                        "setBark",
                        "void",
                        [new JParameter("bark", "String")],
                        `this.bark = bark;`
                    ),
                    new JMethod(
                        ["public"],
                        "bark",
                        "void",
                        [],
                        [
                            "String bark;",
                            "bark = this.bark.concat(this.bark);",
                            "System.out.println(bark);",
                        ].join("\n")
                    ),
                    new JMethod(
                        ["public"],
                        "bark",
                        "void",
                        [new JParameter("bark", "String")],
                        "System.out.println(bark);"
                    ),
                ],
                [new JField(["private"], "bark", "String")]
            ),
        ],
        () =>
            [
                bark[2] + bark[2],
                bark[0] + bark[0],
                bark[1] + bark[1],
                bark[0] + bark[0],
                bark[2],
            ].join("\n")
    );
};

export const randomCodeMedium = (): JProg => {
    return pickRandom(
        randomCodeMedium_001,
        randomCodeMedium_002,
        randomCodeMedium_003,
        randomCodeMedium_004
    )();
};
