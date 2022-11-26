import {useState} from "react";

export const sum = (a: number, b: number) => {
    return a + b;
};

export const mult = (a: number, b: number) => {
    return a * b;
};

export function splitIntoWords(sentence: string) {
    return sentence.toLowerCase().split(/\s/);
}

console.log(typeof useState)