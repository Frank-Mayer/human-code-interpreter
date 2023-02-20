import { Lang } from "./Lang";
import { randomCode as randomCodeJava } from "./Java/randomCode";
import type { VirtualProg } from "./VirtualProg";
import { Result } from "@frank-mayer/opsult";

export const randomCode = (
    difficulty: number,
    lang: Lang
): Result<VirtualProg, string> => {
    switch (lang) {
        case "java":
            return randomCodeJava(difficulty);
        default:
            return Result.Err(`Language ${lang} not supported.`);
    }
};
