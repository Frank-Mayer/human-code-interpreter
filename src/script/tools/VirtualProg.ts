import type { Lang } from "./Lang";

export interface VirtualProg {
    readonly lang: Lang;
    readonly displaySource: string;
    readonly js: () => string;
}
