export interface VirtualProg {
    readonly displaySource: string;
    readonly js: () => string;
}

export const makeVirtualProg = (
    src: string,
    js: () => string
): VirtualProg => ({
    displaySource: src,
    js: js,
});
