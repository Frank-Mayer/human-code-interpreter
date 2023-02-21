import type { VirtualProg } from "../../VirtualProg";
import { getVarNames, pickRandom, rInt } from "../../tools";
import { header } from "../header";
import { tab } from "../tab";

const randomCodeHard_001 = (): VirtualProg => {
    const str = getVarNames()[0];

    const cpp = [
        header,
        "int main()",
        "{",
        `${tab}char* s = "${str}";`,
        "",
        `${tab}printf("%s ",s);`,
        `${tab}s++;`,
        `${tab}printf("%s",s);`,
        `${tab}return 0;`,
        `}`,
    ].join("\n");

    return {
        lang: "cpp",
        displaySource: cpp,
        js: () => str.substring(1),
    };
};

export const randomCodeHard = (): VirtualProg => {
    return pickRandom(randomCodeHard_001)();
};
