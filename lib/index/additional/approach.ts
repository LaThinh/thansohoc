import { sumDigit } from "@/lib/utils/sumDigit";
import { alphabetValues, DataVowels } from "@/lib/data/alphabet";
import { getYValue } from "@/lib/utils/getYValue";

export function approachCompetence(name: string): number {
    return sumDigit(approachMotivation(name) + approachAttitude(name));
}

export function approachMotivation(name: string): number {
    const firstName = name.split(/\s+/).slice(-1).shift() || '';
    return calculateTotal(firstName, true);
}

export function approachAttitude(name: string): number {
    const firstName = name.split(/\s+/).slice(-1).shift() || '';
    return calculateTotal(firstName, false);
}

function calculateTotal(firstName: string, isCompetence: boolean): number {
    let total = 0;

    for (let i = 0, length = firstName.length; i < length; i++) {
        const char = firstName[i];

        if (char === 'Y') {
            total += getYValue(firstName, i, isCompetence);
        } else {
            const isVowel = DataVowels.has(char);
            if ((isCompetence && isVowel) || (!isCompetence && !isVowel)) {
                total += alphabetValues.get(char) || 0;
            }
        }
    }

    return sumDigit(total);
}
