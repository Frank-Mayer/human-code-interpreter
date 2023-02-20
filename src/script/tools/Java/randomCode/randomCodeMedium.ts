import { VirtualProg } from "../../VirtualProg";
import { header } from "../header";
import { tab } from "../tab";
import {
    getBarkingSounds,
    getDogs,
    getVarNames,
    pickRandom,
    rInt,
} from "./tools";

const randomCodeMedium_001 = (): VirtualProg => {
    const varNames = getVarNames();

    const r = rInt(1, 4);

    const java = [
        header,
        `public class Main {`,
        `${tab}public static void main(String[] args) {`,
        `${tab}${tab}var ${varNames[0]} = ${r};`,
        `${tab}${tab}var ${varNames[1]} = ++${varNames[0]};`,
        `${tab}${tab}var ${varNames[2]} = ${varNames[1]}++;`,
        `${tab}${tab}var ${varNames[3]} = ${varNames[2]}--;`,
        `${tab}${tab}var ${varNames[4]} = --${varNames[3]};`,
        `${tab}${tab}${varNames[0]} *= ${varNames[2]}++;`,
        "",
        `${tab}${tab}System.out.printf(`,
        `${tab}${tab}${tab}"%d %d %d %d %d",`,
        `${tab}${tab}${tab}${varNames[0]},`,
        `${tab}${tab}${tab}${varNames[1]},`,
        `${tab}${tab}${tab}${varNames[2]},`,
        `${tab}${tab}${tab}${varNames[3]},`,
        `${tab}${tab}${tab}${varNames[4]}`,
        `${tab}${tab});`,
        `${tab}}`,
        `}`,
    ].join("\n");

    return {
        displaySource: java,
        js: () => {
            let a = r;
            let b = ++a;
            let c = b++;
            let d = c--;
            let e = --d;
            a *= c++;

            return `${a} ${b} ${c} ${d} ${e}`;
        },
    };
};

const randomCodeMedium_002 = (): VirtualProg => {
    const start = rInt(0, 2);
    const end = start + rInt(4, 6);
    const step = rInt(2, 3);

    const java = [
        header,
        `public class Main {`,
        `${tab}public static void main(String[] args) {`,
        `${tab}${tab}for (int i = ${start}; i <= ${end}; i += ${step}) {`,
        `${tab}${tab}${tab}System.out.println(i);`,
        `${tab}${tab}}`,
        `${tab}}`,
        `}`,
    ].join("\n");

    return {
        displaySource: java,
        js: () =>
            new Array(end - start + 1)
                .fill(0)
                .map((_, i) => start + i * step)
                .join(" "),
    };
};

const randomCodeMedium_003 = (): VirtualProg => {
    const start = rInt(15, 17);
    const end = start - rInt(6, 8);
    const step = rInt(2, 3);

    const java = [
        header,
        `public class Main {`,
        `${tab}public static void main(String[] args) {`,
        `${tab}${tab}for (int i = ${start}; i >= ${end}; i -= ${step}) {`,
        `${tab}${tab}${tab}System.out.println(i);`,
        `${tab}${tab}}`,
        `${tab}}`,
        `}`,
    ].join("\n");

    return {
        displaySource: java,
        js: () =>
            new Array(start - end + 1)
                .fill(0)
                .map((_, i) => start - i * step)
                .join(" "),
    };
};

const randomCodeMedium_004 = (): VirtualProg => {
    const varNames = getDogs();
    const bark = getBarkingSounds();

    const java = [
        header,
        `public class Main {`,
        `${tab}public static void main(String[] args) {`,
        `${tab}${tab}Dog ${varNames[0]} = new Dog();`,
        `${tab}${tab}Dog ${varNames[1]} = new Dog("${bark[0]}");`,
        `${tab}${tab}${varNames[0]}.bark();`,
        `${tab}${tab}${varNames[1]}.bark();`,
        `${tab}${tab}${varNames[0]}.setBark("${bark[1]}");`,
        `${tab}${tab}${varNames[0]}.bark();`,
        `${tab}${tab}${varNames[1]}.bark();`,
        `${tab}${tab}${varNames[0]}.bark("${bark[2]}");`,
        `${tab}}`,
        `}`,
        "",
        `class Dog {`,
        `${tab}private String bark;`,
        "",
        `${tab}public Dog(String bark) {`,
        `${tab}${tab}this.bark = bark;`,
        `${tab}}`,
        "",
        `${tab}public Dog() {`,
        `${tab}${tab}this.bark = "${bark[2]}";`,
        `${tab}}`,
        "",
        `${tab}public void setBark(String bark) {`,
        `${tab}${tab}this.bark = bark;`,
        `${tab}}`,
        "",
        `${tab}public void bark() {`,
        `${tab}${tab}System.out.println(this.bark);`,
        `${tab}}`,
        "",
        `${tab}public void bark(String bark) {`,
        `${tab}${tab}System.out.println(bark);`,
        `${tab}}`,
        `}`,
    ].join("\n");

    return {
        displaySource: java,
        js: () =>
            bark[2] +
            bark[2] +
            "\n" +
            bark[0] +
            bark[0] +
            "\n" +
            bark[1] +
            bark[1] +
            "\n" +
            bark[0] +
            bark[0] +
            "\n" +
            bark[2],
    };
};

export const randomCodeMedium = (): VirtualProg => {
    return pickRandom(
        randomCodeMedium_001,
        randomCodeMedium_002,
        randomCodeMedium_003,
        randomCodeMedium_004
    )();
};
