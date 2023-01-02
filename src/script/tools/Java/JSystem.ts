import { JPrintStream } from "./JPrintStream";

export class JSystem {
    out: JPrintStream;

    constructor() {
        this.out = new JPrintStream();
    }
}
