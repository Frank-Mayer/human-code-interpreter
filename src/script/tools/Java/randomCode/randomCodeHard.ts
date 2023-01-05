import { JClass } from "../JClass";
import { JMethod } from "../JMethod";
import { JParameter } from "../JParameter";
import { JProg } from "../JProg";
import { tab } from "../tab";
import { getVarNames, pickRandom, rInt } from "./tools";
import { SequentialStream } from "@frank-mayer/stream";

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

const randomCodeHard_003 = (): JProg => {
    const varNames = getVarNames();

    return new JProg(
        ["import java.util.ArrayList;"],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `Stream<Integer> ${varNames[0]} = Stream.of(1, 2, 3);`,
                    `Stream<Integer> ${varNames[1]} = Stream.of(4, 5, 6);`,
                    "",
                    `Stream.concat(a, b)`,
                    `${tab}.map((i) -> i << 1)`,
                    `${tab}.distinct()`,
                    `${tab}.map((i) -> i.toString())`,
                    `${tab}.forEach(System.out::println);`,
                ].join("\n")
            ),
        ]),
        [],
        () => {
            const a = [1, 2, 3];
            const b = [4, 5, 6];
            return SequentialStream.of(a)
                .concat(SequentialStream.of(b))
                .map((i) => i << 1)
                .distinct()
                .map((i) => i.toString())
                .reduce((acc, i) => acc + i + " ", "");
        }
    );
};

const randomCodeHard_004 = (): JProg => {
    const varNames = getVarNames();
    const start = rInt(12, 15);
    const end = start + rInt(6, 7);

    return new JProg(
        ["import java.util.ArrayList;"],
        new JClass("Main", [
            new JMethod(
                ["public", "static"],
                "main",
                "void",
                [new JParameter("args", "String[]")],
                [
                    `for(int i = ${start}; i <= ${end}; i++) {`,
                    `${tab}switch (i % 15) {`,
                    `${tab}${tab}case 0:`,
                    `${tab}${tab}${tab}System.out.println("${varNames[0]}");`,
                    `${tab}${tab}${tab}break;`,
                    `${tab}${tab}case 3:`,
                    `${tab}${tab}case 6:`,
                    `${tab}${tab}case 9:`,
                    `${tab}${tab}case 12:`,
                    `${tab}${tab}${tab}System.out.println("${varNames[1]}");`,
                    `${tab}${tab}${tab}break;`,
                    `${tab}${tab}case 5:`,
                    `${tab}${tab}case 10:`,
                    `${tab}${tab}${tab}System.out.println("${varNames[2]}");`,
                    `${tab}${tab}${tab}break;`,
                    `${tab}${tab}default:`,
                    `${tab}${tab}${tab}System.out.println(i);`,
                    `${tab}${tab}${tab}break;`,
                    `${tab}}`,
                    `}`,
                ].join("\n")
            ),
        ]),
        [],
        () => {
            const result = new Array<string>();
            for (let i = start; i <= end; i++) {
                switch (i % 15) {
                    case 0:
                        result.push(varNames[0]);
                        break;
                    case 3:
                    case 6:
                    case 9:
                    case 12:
                        result.push(varNames[1]);
                        break;
                    case 5:
                    case 10:
                        result.push(varNames[2]);
                        break;
                    default:
                        result.push(i.toString());
                        break;
                }
            }
            return result.join("\n");
        }
    );
};

export const randomCodeHard = (): JProg => {
    return pickRandom(
        randomCodeHard_001,
        randomCodeHard_002,
        randomCodeHard_003,
        randomCodeHard_004
    )();
};
