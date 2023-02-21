import type { VirtualProg } from "../../VirtualProg";
import { getVarNames, pickRandom, rInt } from "../../tools";
import { header } from "../header";
import { tab } from "../tab";

const randomCodeMedium_001 = (): VirtualProg => {
    const bar = rInt(512, 1024);
    const foo = rInt(128, 511);
    const className = getVarNames()[0].replace(/^[a-z]/g, (c) =>
        c.toUpperCase()
    );

    const cpp = [
        header,
        `class ${className}`,
        "{",
        tab + "private:",
        tab + tab + className + "()",
        tab + tab + "{",
        tab + tab + tab + `bar = ${bar};`,
        tab + tab + "}",
        tab + tab + "",
        tab + "public:",
        tab + tab + "int bar;",
        "",
        tab + tab + "int getBar()",
        tab + tab + "{",
        tab + tab + tab + "return bar;",
        tab + tab + "}",
        tab + tab + "",
        tab + tab + "int getFoo()",
        tab + tab + "{",
        tab + tab + tab + `return ${foo};`,
        tab + tab + "}",
        "};",
        "",
        "int main ()",
        "{",
        tab + className + "* m = nullptr;",
        tab + `printf("%d", m->getFoo());`,
        tab + "return 0;",
        "}",
    ].join("\n");

    return {
        lang: "cpp",
        displaySource: cpp,
        js: () => foo.toString(),
    };
};

export const randomCodeMedium = (): VirtualProg => {
    return pickRandom(randomCodeMedium_001)();
};
