import { Lang } from "./Lang";
import { randomCode as randomCodeJava } from "./Java/randomCode";
import type { VirtualProg } from "./VirtualProg";

export const randomCode = (difficulty: number, lang: Lang): VirtualProg => {
    switch (lang) {
        case "java":
            return randomCodeJava(difficulty);
        default:
            throw new Error(`Language ${lang} not supported.`);
    }
};
