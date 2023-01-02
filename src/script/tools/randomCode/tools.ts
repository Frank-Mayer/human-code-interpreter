const hash = (str: string) => {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    }
    return h;
};

const lastRandomMap = new Map<number, number>();
export const rInt = (min: number, max: number) => {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomMapKey = hash(`${min}-${max}-` + new Error().stack);
    const lastRandom = lastRandomMap.get(randomMapKey);
    if (r === lastRandom) {
        return rInt(min, max);
    }

    lastRandomMap.set(randomMapKey, r);
    return r;
};

export const pickRandom = <T>(...arr: T[]) => arr[rInt(0, arr.length - 1)];

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
