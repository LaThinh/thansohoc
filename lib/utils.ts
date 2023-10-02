import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function replaceWithBr(strText: string) {
  return strText.replace(/\n/g, "<br />");
}

export function replaceWithP(strText: string) {
  if (strText) return strText.replace(/\n/g, "</p></p>");
  return "";
}
