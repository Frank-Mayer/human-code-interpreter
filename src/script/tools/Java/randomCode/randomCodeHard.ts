import { VirtualProg } from "../../VirtualProg";
import { header } from "../header";
import { tab } from "../tab";
import { getVarNames, pickRandom, rInt } from "./tools";
import { SequentialStream } from "@frank-mayer/stream";

const randomCodeHard_001 = (): VirtualProg => {
    const varNames = getVarNames();

    const max = rInt(5, 10);

    const java = [
        header,
        `public class Main {`,
        `${tab}public static void main(String[] args) {`,
        `${tab}${tab}var ${varNames[0]} = new ArrayList<Integer>(${max});`,
        `${tab}${tab}var ${varNames[1]} = -1;`,
        "",
        `${tab}${tab}while(${varNames[1]} < ${max - 1}) {`,
        `${tab}${tab}${tab}${varNames[0]}[++${varNames[1]}] = ${varNames[1]};`,
        `${tab}${tab}}`,
        "",
        `${tab}${tab}for(${varNames[1]} = 0; ${varNames[1]} < ${max}; ${varNames[1]}++) {`,
        `${tab}${tab}${tab}System.out.println(${varNames[0]}[${varNames[1]}]);`,
        `${tab}${tab}}`,
        `${tab}}`,
        `}`,
    ].join("\n");

    return {
        displaySource: java,
        js: () =>
            new Array(max)
                .fill(0)
                .map((_, i) => i)
                .join("\n"),
    };
};

const randomCodeHard_002 = (): VirtualProg => {
    const varNames = getVarNames();

    const max = rInt(5, 10);

    const java = [
        header,
        `public class Main {`,
        `${tab}public static void main(String[] args) {`,
        `${tab}${tab}var ${varNames[0]} = new ArrayList<Integer>(${max});`,
        `${tab}${tab}var ${varNames[1]} = -1;`,
        "",
        `${tab}${tab}while(${varNames[1]} < ${max - 1}) {`,
        `${tab}${tab}${tab}${varNames[0]}.add(++${varNames[1]}, ${varNames[1]} % 2);`,
        `${tab}${tab}}`,
        "",
        `${tab}${tab}for(${varNames[1]} = 0; ${varNames[1]} < ${max}; ${varNames[1]}++) {`,
        `${tab}${tab}${tab}System.out.println(${varNames[0]}.get(${varNames[1]}));`,
        `${tab}${tab}}`,
        `${tab}}`,
        `}`,
    ].join("\n");

    return {
        displaySource: java,
        js: () =>
            new Array(max)
                .fill(0)
                .map((_, i) => i % 2)
                .join("\n"),
    };
};

const randomCodeHard_003 = (): VirtualProg => {
    const varNames = getVarNames();

    const java = [
        header,
        `public class Main {`,
        `${tab}public static void main(String[] args) {`,
        `${tab}${tab}Stream<Integer> ${varNames[0]} = Stream.of(1, 2, 3);`,
        `${tab}${tab}Stream<Integer> ${varNames[1]} = Stream.of(4, 5, 6);`,
        "",
        `${tab}${tab}Stream.concat(${varNames[0]}, ${varNames[1]})`,
        `${tab}${tab}${tab}.map((i) -> i << 1)`,
        `${tab}${tab}${tab}.distinct()`,
        `${tab}${tab}${tab}.map((i) -> i.toString())`,
        `${tab}${tab}${tab}.forEach(System.out::println);`,
        `${tab}}`,
        `}`,
    ].join("\n");

    return {
        displaySource: java,
        js: () => {
            const a = [1, 2, 3];
            const b = [4, 5, 6];
            return SequentialStream.of(a)
                .concat(SequentialStream.of(b))
                .map((i) => i << 1)
                .distinct()
                .map((i) => i.toString())
                .reduce((acc, i) => acc + i + " ", "");
        },
    };
};

const randomCodeHard_004 = (): VirtualProg => {
    const varNames = getVarNames();
    const start = rInt(12, 15);
    const end = start + rInt(6, 7);

    const java = [
        header,
        `public class Main {`,
        `${tab}public static void main(String[] args) {`,
        `${tab}${tab}for(int i = ${start}; i <= ${end}; i++) {`,
        `${tab}${tab}${tab}switch (i % 15) {`,
        `${tab}${tab}${tab}${tab}case 0:`,
        `${tab}${tab}${tab}${tab}${tab}System.out.println("${varNames[0]}");`,
        `${tab}${tab}${tab}${tab}${tab}break;`,
        `${tab}${tab}${tab}${tab}case 3:`,
        `${tab}${tab}${tab}${tab}case 6:`,
        `${tab}${tab}${tab}${tab}case 9:`,
        `${tab}${tab}${tab}${tab}case 12:`,
        `${tab}${tab}${tab}${tab}${tab}System.out.println("${varNames[1]}");`,
        `${tab}${tab}${tab}${tab}${tab}break;`,
        `${tab}${tab}${tab}${tab}case 5:`,
        `${tab}${tab}${tab}${tab}case 10:`,
        `${tab}${tab}${tab}${tab}${tab}System.out.println("${varNames[2]}");`,
        `${tab}${tab}${tab}${tab}${tab}break;`,
        `${tab}${tab}${tab}${tab}default:`,
        `${tab}${tab}${tab}${tab}${tab}System.out.println(i);`,
        `${tab}${tab}${tab}${tab}${tab}break;`,
        `${tab}${tab}${tab}}`,
        `${tab}${tab}}`,
        `${tab}}`,
        `}`,
    ].join("\n");

    return {
        displaySource: java,
        js: () => {
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
        },
    };
};

export const randomCodeHard = (): VirtualProg => {
    return pickRandom(
        randomCodeHard_001,
        randomCodeHard_002,
        randomCodeHard_003,
        randomCodeHard_004
    )();
};
