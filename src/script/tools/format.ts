import prettier from "prettier";
import { Plugin } from "prettier";
import PrettierJava from "prettier-plugin-java";

export const format = (code: string) =>
    prettier.format(code, {
        parser: "java",
        plugins: [PrettierJava as unknown as Plugin],
        tabWidth: 4,
        useTabs: false,
        trailingComma: "none",
    });
