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
                    const val = args.shift();
                    if (typeof val === "string") {
                        return val;
                    } else if ("toString" in val) {
                        return val.toString();
                    } else {
                        return String(val);
                    }
                case "f":
                    if (typeof args[0] === "number") {
                        return args.shift().toFixed(6);
                    }
                    throw new Error("Expected number.");
                case "d":
                    if (typeof args[0] === "number") {
                        return args.shift().toFixed(0);
                    }
                    throw new Error("Expected number.");
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
        return this._history;
    }
}
