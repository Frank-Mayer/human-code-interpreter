import { randomCodeEasy } from "./randomCodeEasy";
import { randomCodeMedium } from "./randomCodeMedium";
import { randomCodeHard } from "./randomCodeHard";
import type { VirtualProg } from "../../VirtualProg";
import { Result } from "@frank-mayer/opsult";

export const randomCode = (difficulty: number): Result<VirtualProg, string> => {
    switch (difficulty) {
        case 1:
            return Result.Ok(randomCodeEasy());
        case 2:
            return Result.Ok(randomCodeMedium());
        case 3:
            return Result.Ok(randomCodeHard());
        default:
            return Result.Err(`Invalid difficulty: ${difficulty}.`);
    }
};
