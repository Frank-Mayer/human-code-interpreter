import type { VirtualProg } from "../../VirtualProg";
import { header } from "../header";
import { tab } from "../tab";
import { getVarNames, pickRandom, rInt } from "../../tools";

const randomCodeEasy_001 = (): VirtualProg => {
    const varNames = getVarNames();

    const a = rInt(0, 5);
    const b = rInt(0, 5);
    const c = rInt(0, 5);

    const java = [
        header,
        "class Main {",
        tab + "public static void main (String[] args) {",
        `${tab}${tab}int ${varNames[0]} = ${a};`,
        `${tab}${tab}int ${varNames[1]} = ${b};`,
        `${tab}${tab}int ${varNames[2]} = ${c};`,
        `${tab}${tab}${varNames[0]} = ${varNames[0]} + ${varNames[1]};`,
        `${tab}${tab}${varNames[1]} = ${varNames[0]} + ${varNames[2]};`,
        `${tab}${tab}${varNames[2]} = ${varNames[0]} + ${varNames[1]};`,
        "",
        `${tab}${tab}System.out.println(${varNames[1]});`,
        tab + "}",
        "}",
    ].join("\n");

    return {
        lang: "java",
        displaySource: java,
        js: () => (a + b + c).toString(),
    };
};

const randomCodeEasy_002 = (): VirtualProg => {
    const varNames = getVarNames();

    const animals = [
        varNames[0],
        varNames[1],
        varNames[2],
        varNames[3],
        varNames[4],
    ];

    const r = rInt(0, 4);

    const java = [
        header,
        "class Main {",
        tab + "public static void main (String[] args) {",
        `${tab}${tab}String[] animals = {`,
        ...animals.map((x) => tab.repeat(3) + `"${x}",`),
        `${tab}${tab}};`,
        `${tab}System.out.println(animals[${r}]);`,
        "}",
    ].join("\n");

    return { lang: "java", displaySource: java, js: () => animals[r] };
};

const randomCodeEasy_003 = (): VirtualProg => {
    const varNames = getVarNames();
    const count = rInt(6, 11);
    const index = rInt(2, count - 3);
    const r = rInt(index - 1, index + 1);

    const java = [
        header,
        "class Main {",
        tab + "public static void main (String[] args) {",
        `${tab}${tab}ArrayList<String> animals = new ArrayList<>(${count});`,
    ];

    for (let i = 0; i < count; i++) {
        java.push(`${tab}${tab}animals.add("${varNames[i]}");`);
    }

    java.push("");
    java.push(`${tab}${tab}animals.remove(${r});`);
    java.push("");
    java.push(`${tab}${tab}System.out.println(animals.get(${index}));`);
    java.push(tab + "}");
    java.push("}");

    return {
        lang: "java",
        displaySource: java.join("\n"),
        js: () => {
            const animals = varNames.slice(0, count);
            animals.splice(r, 1);
            return animals[index];
        },
    };
};

const randomCodeEasy_004 = (): VirtualProg => {
    const varNames = getVarNames();
    const value = rInt(6, 19);
    const a = rInt(6, 19);
    const b = rInt(6, 19);

    const java = [
        header,
        "class Main {",
        tab + "public static void main (String[] args) {",
        `${tab.repeat(2)}int i = ${value};`,
        "",
        `${tab.repeat(2)}if (i >= ${a}) {`,
        `${tab.repeat(3)}System.out.println("${varNames[1]}");`,
        `${tab.repeat(2)}}`,
        `${tab.repeat(2)}else if (i <= ${b}) {`,
        `${tab.repeat(3)}System.out.println("${varNames[2]}");`,
        `${tab.repeat(2)}}`,
        `${tab.repeat(2)}else {`,
        `${tab.repeat(3)}System.out.println("${varNames[3]}");`,
        `${tab.repeat(2)}}`,
        tab + "}",
        "}",
    ].join("\n");

    return {
        lang: "java",
        displaySource: java,
        js: () => {
            if (value >= a) {
                return varNames[1];
            } else if (value <= b) {
                return varNames[2];
            } else {
                return varNames[3];
            }
        },
    };
};

const randomCodeEasy_005 = (): VirtualProg => {
    const start = rInt(0, 2);
    const end = start + rInt(4, 6);

    const java = [
        header,
        "class Main {",
        tab + "public static void main (String[] args) {",
        `${tab.repeat(2)}for (int i = ${start}; i <= ${end}; i++) {`,
        `${tab.repeat(3)}System.out.println(i);`,
        `${tab.repeat(2)}}`,
        tab + "}",
        "}",
    ].join("\n");

    return {
        lang: "java",
        displaySource: java,
        js: () => {
            const result = new Array<string>();
            for (let i = start; i <= end; i++) {
                result.push(i.toString());
            }
            return result.join("\n");
        },
    };
};

export const randomCodeEasy = (): VirtualProg => {
    return pickRandom(
        randomCodeEasy_001,
        randomCodeEasy_002,
        randomCodeEasy_003,
        randomCodeEasy_004,
        randomCodeEasy_005
    )();
};
