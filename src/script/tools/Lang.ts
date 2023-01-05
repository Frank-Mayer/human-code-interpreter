export type Lang = "java";

const langs: ReadonlyArray<Lang> = ["java"];

export const isLang = (lang: string): lang is Lang =>
    langs.includes(lang as Lang);
