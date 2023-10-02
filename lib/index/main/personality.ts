import {sumDigit} from "@/lib/utils/sumDigit";
import {alphabetValues, DataConsonants} from "@/lib/data/alphabet";
import {getYValue} from "@/lib/utils/getYValue";

export function personality(name: string): number {
    const length = name.length;
    let total = 0;

    for (let i = 0; i < length; i++) {
        const char = name[i];

        if (!DataConsonants.has(char)) {
            continue;
        }

        if (char === 'Y') {
            total += getYValue(name, i, false);
            continue;
        }

        total += alphabetValues.get(char) || 0;
    }

    return sumDigit(total, true);
}
