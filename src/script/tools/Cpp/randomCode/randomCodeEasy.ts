import type { VirtualProg } from "../../VirtualProg";
import { pickRandom, rInt } from "../../tools";
import { header } from "../header";
import { tab } from "../tab";

const randomCodeEasy_001 = (): VirtualProg => {
    const a = rInt(0, 4);
    const b = rInt(5, 9);

    const cpp = [
        header,
        "void swap(int a, int b)",
        "{",
        tab + "int t = a;",
        "",
        tab + "a = b;",
        tab + "b = t;",
        "}",
        "",
        "int main()",
        "{",
        tab + `int x = ${a}, y = ${b};`,
        tab + "swap(x, y);",
        tab + 'printf("%d %d", x, y);',
        tab + "return 0;",
        "}",
    ].join("\n");

    return {
        lang: "cpp",
        displaySource: cpp,
        js: () => `${b} ${a}`,
    };
};

const randomCodeEasy_002 = (): VirtualProg => {
    const start = rInt(3, 5);

    const cpp = [
        header,
        "void f()",
        "{",
        `${tab}static int i = ${start};`,
        "",
        `${tab}printf("%d\\n", i);`,
        `${tab}if(i--) f();`,
        "}",
        "",
        "int main()",
        "{",
        `${tab}f();`,
        `${tab}return 0;`,
        "}",
    ].join("\n");

    return {
        lang: "cpp",
        displaySource: cpp,
        js: () => {
            let str = "";

            for (let i = start; i >= 0; --i) {
                str += `${i}\n`;
            }

            return str;
        },
    };
};

const randomCodeEasy_003 = (): VirtualProg => {
    const start = rInt(3, 5);

    const cpp = [
        header,
        "void f()",
        "{",
        `${tab}static int i = ${start};`,
        "",
        `${tab}printf("%d\\n", i);`,
        `${tab}if(--i) f();`,
        "}",
        "",
        "int main()",
        "{",
        `${tab}f();`,
        `${tab}return 0;`,
        "}",
    ].join("\n");

    return {
        lang: "cpp",
        displaySource: cpp,
        js: () => {
            let str = "";

            for (let i = start; i; --i) {
                str += `${i}\n`;
            }

            return str;
        },
    };
};

const randomCodeEasy_004 = (): VirtualProg => {
    const start = rInt(3, 5);
    const step = rInt(2, 3);
    const end = start + step * rInt(3, 5);

    const cpp = [
        header,
        "int main()",
        "{",
        tab + `for (int i = ${start}; i <= ${end}; i += ${step})`,
        tab + "{",
        tab + tab + `printf("%d", i);`,
        tab + "}",
        "",
        tab + "return 0;",
        "}",
    ].join("\n");

    return {
        lang: "cpp",
        displaySource: cpp,
        js: () => {
            let str = "";

            for (let i = start; i <= end; i += step) {
                str += i.toString();
            }

            return str;
        },
    };
};

const randomCodeEasy_005 = (): VirtualProg => {
    const start = rInt(14, 17);
    const step = rInt(2, 3);
    const end = start - step * rInt(3, 5);

    const cpp = [
        header,
        "int main()",
        "{",
        tab + `for (int i = ${start}; i >= ${end}; i -= ${step})`,
        tab + "{",
        tab + tab + `printf("%d", i);`,
        tab + "}",
        "",
        tab + "return 0;",
        "}",
    ].join("\n");

    return {
        lang: "cpp",
        displaySource: cpp,
        js: () => {
            let str = "";

            for (let i = start; i >= end; i -= step) {
                str += i.toString();
            }

            return str;
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
