import {sumDigit} from "@/lib/utils/sumDigit";
import {DateOfBirth} from "@/lib/dob";
import {expression} from "../main/expression";
import {lifePath} from "../main/lifePath";

export function maturity(name: string, dobObject: DateOfBirth): number {
    return sumDigit(lifePath(dobObject) + expression(name), true);
}

export function maturityChallenge(name: string, dobObject: DateOfBirth): number {
    return sumDigit(lifePath(dobObject) - expression(name) + 9);
}
