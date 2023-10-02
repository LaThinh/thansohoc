import {sumDigit} from "@/lib/utils/sumDigit";
import {alphabetValues, DataVowels} from "@/lib/data/alphabet";
import {getYValue} from "@/lib/utils/getYValue";

export function soulUrge(name: string): number {
    let total = 0;

    for (let i = 0, length = name.length; i < length; i++) {
        const char = name[i];
        if (char === 'Y') {
            total += getYValue(name, i);
        } else if (DataVowels.has(char)) {
            total += alphabetValues.get(char) || 0;
        }
    }
    return sumDigit(total, true);
}
