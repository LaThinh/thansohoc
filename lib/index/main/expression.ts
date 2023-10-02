import { sumDigit } from "@/lib/utils/sumDigit";
import {alphabetValues} from "@/lib/data/alphabet";

export function expression(name: string): number {
    let total = 0;
    for (const char of name.replace(/\s/g, '')) {
        total += alphabetValues.get(char) || 0;
    }

    return sumDigit(total, true);
}
