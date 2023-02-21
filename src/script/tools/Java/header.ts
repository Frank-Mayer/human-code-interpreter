import { packageName } from "../tools";

export const header =
    [
        `package ${packageName};`,
        "",
        "import java.util.*;",
        "import java.util.stream.*;",
    ].join("\n") + "\n";
