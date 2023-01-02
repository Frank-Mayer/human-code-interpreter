import { JClass } from "./JClass";

export class JObject extends JClass {
    override toString() {
        const supStr = super.toString();

        // replace "class" with "object"
        return "object" + supStr.substring(5);
    }
}
