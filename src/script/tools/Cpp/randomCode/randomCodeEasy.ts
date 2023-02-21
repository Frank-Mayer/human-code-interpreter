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
        tab + "std::cout << x << ' ' << y;",
        "}",
    ].join("\n");

    return {
        lang: "cpp",
        displaySource: cpp,
        js: () => `${b} ${a}`,
    };
};

export const randomCodeEasy = (): VirtualProg => {
    return pickRandom(randomCodeEasy_001)();
};
