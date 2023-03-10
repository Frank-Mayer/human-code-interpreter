const hash = (str: string) => {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    }
    // positive
    return h >>> 0;
};

export const packageName = "io.frankmayer.humancodeinterpreter";

const lastRandomMap = new Map<number, number>();
export const rInt = (
    min: number,
    max: number,
    randomMapKey?: number | string
): number => {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;

    const _randomMapKey = randomMapKey
        ? typeof randomMapKey === "number"
            ? randomMapKey
            : hash(randomMapKey)
        : hash(`${min}-${max}-` + new Error().stack);

    const lastRandom = lastRandomMap.get(_randomMapKey);

    if (r === lastRandom) {
        const r2 = Math.floor(Math.random() * (max - min + 1)) + min;

        if (r2 !== r) {
            lastRandomMap.set(_randomMapKey, r2);
            return r2;
        }
    }

    lastRandomMap.set(_randomMapKey, r);
    return r;
};

export const pickRandom = <T>(...arr: T[]) => {
    return arr[rInt(0, arr.length - 1, "pickRandom" + JSON.stringify(arr))];
};

/**
 * Fisher–Yates shuffle
 */
const shuffle = <T>(arr: Iterable<T>) => {
    const newArr = Array.from(arr);
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
};

const dogs: Array<string> = [
    "husky",
    "pug",
    "poodle",
    "labrador",
    "shepherd",
    "beagle",
    "bulldog",
    "dalmatian",
    "chihuahua",
    "terrier",
    "corgi",
    "boxer",
    "rottweiler",
];

const barkingSounds: Array<string> = [
    "woof",
    "bark",
    "arf",
    "yip",
    "yap",
    "howl",
    "bellow",
    "bay",
    "bawl",
];

const varNames: Array<string> = [
    "ant",
    "bat",
    "bear",
    "bee",
    "bird",
    "butterfly",
    "cat",
    "chicken",
    "cow",
    "crab",
    "deer",
    "dog",
    "dolphin",
    "dragon",
    "dragonfly",
    "duck",
    "eel",
    "elephant",
    "fish",
    "fly",
    "frog",
    "giraffe",
    "goat",
    "horse",
    "kangaroo",
    "koala",
    "lion",
    "lizard",
    "lobster",
    "mammoth",
    "monkey",
    "mosquito",
    "mouse",
    "ocelot",
    "octopus",
    "panda",
    "pig",
    "rabbit",
    "redPanda",
    "salmon",
    "seal",
    "shark",
    "sheep",
    "shrimp",
    "snake",
    "spider",
    "squid",
    "tiger",
    "toad",
    "turtle",
    "unicorn",
    "walrus",
    "warewolf",
    "whale",
    "wolf",
    "worm",
    "zebra",
];

export const getVarNames = () => shuffle(varNames);

export const getDogs = () => shuffle(dogs);
export const getBarkingSounds = () => shuffle(barkingSounds);
