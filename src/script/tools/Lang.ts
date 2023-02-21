export type Lang = "java" | "cpp" | "rust";

const langs: ReadonlySet<Lang> = new Set(["java", "cpp", "rust"]);

export const isLang = (lang: string): lang is Lang => langs.has(lang as Lang);
