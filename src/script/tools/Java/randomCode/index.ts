import { randomCodeEasy } from "./randomCodeEasy";
import { randomCodeMedium } from "./randomCodeMedium";
import { randomCodeHard } from "./randomCodeHard";
import { randomCodeHardcore } from "./randomCodeHardcore";
import type { JProg } from "../JProg";

export const randomCode = (difficulty: number): JProg => {
    switch (difficulty) {
        case 1:
            return randomCodeEasy();
        case 2:
            return randomCodeMedium();
        case 3:
            return randomCodeHard();
        case 4:
            return randomCodeHardcore();
        default:
            throw new Error(`Invalid difficulty: ${difficulty}.`);
    }
};
