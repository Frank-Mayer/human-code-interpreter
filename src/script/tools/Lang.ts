export type Lang = "java" | "cpp";

const langs: ReadonlySet<Lang> = new Set(["java", "cpp"]);

export const isLang = (lang: string): lang is Lang => langs.has(lang as Lang);
