export class JPrintStream {
    private _history: string;

    constructor() {
        this._history = "";
    }

    println(s: string) {
        this._history += s + "\n";
        console.log(s);
    }

    print(s: string) {
        this._history += s;
        console.log(s);
    }

    printf(format: string, ...args: any[]) {
        const f = format.replace(/%(s|f|d|b|n)/g, (_, t) => {
            switch (t) {
                case "s":
                    return args.shift();
                case "f":
                    return args.shift().toFixed(6);
                case "d":
                    return args.shift().toFixed(0);
                case "b":
                    if (typeof args[0] === "boolean") {
                        return args.shift() ? "true" : "false";
                    } else {
                        throw new Error("Expected boolean.");
                    }
                case "n":
                    return "\n";
            }
        });

        this._history += f;

        console.log(f);
    }

    get history() {
        return this._history.trimEnd();
    }
}
