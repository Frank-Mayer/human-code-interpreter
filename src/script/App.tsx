import React from "react";
import { Code } from "./components/Code";
import { isLang, Lang } from "./tools/Lang";
import { randomCode } from "./tools/randomCode";
import { VirtualProg } from "./tools/VirtualProg";

const isEqual = (a: string, b: string) => {
    return a.trim().replace(/\s+/g, " ") === b.trim().replace(/\s+/g, " ");
};

const getDifficulty = () => {
    const url = new URL(window.location.href);
    const difficulty = url.searchParams.get("difficulty");
    if (!difficulty) {
        storeDifficulty(1);
        return 1;
    }

    const storedDifficulty = parseInt(difficulty);
    if (storedDifficulty < 1 || storedDifficulty > 3) {
        storeDifficulty(1);
        return 1;
    }

    return storedDifficulty;
};

const storeDifficulty = (difficulty: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("difficulty", difficulty.toString());
    window.history.replaceState({}, "", url.href);
};

const storeLang = (lang: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.href);
};

const getLang = (): Lang => {
    const url = new URL(window.location.href);
    const lang = url.searchParams.get("lang");
    if (!lang || !isLang(lang)) {
        storeLang("java");
        return "java";
    }

    return lang as Lang;
};

const focusTextField = () => {
    setTimeout(() => {
        const textField = document.querySelector("textarea");
        if (textField)
            setTimeout(() => {
                textField.focus();
            }, 200);
    }, 200);
};

export const App = () => {
    const [difficulty, setDifficulty] = React.useState(getDifficulty());
    const [prog, setProg] = React.useState<VirtualProg>();
    const [userOutput, setUserOutput] = React.useState("");
    const [realOutput, setRealOutput] = React.useState("");
    const [correct, setCorrect] = React.useState(false);
    const [lang, setLang] = React.useState(getLang());

    if (!prog) {
        setProg(randomCode(difficulty, lang));
        focusTextField();
        return <p>Loading...</p>;
    }

    return (
        <>
            <header className="header">
                <label>
                    Difficulty:
                    <select
                        value={difficulty}
                        onChange={(ev) => {
                            const newDifficulty = parseInt(ev.target.value);
                            if (newDifficulty === difficulty) return;

                            setDifficulty(newDifficulty);
                            setProg(randomCode(newDifficulty, lang));
                            setRealOutput("");
                            setUserOutput("");
                            focusTextField();
                            storeDifficulty(newDifficulty);
                        }}
                    >
                        <option value={1}>Easy</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Hard</option>
                    </select>
                </label>
                <label>
                    Language:
                    <select
                        value={lang}
                        onChange={(ev) => {
                            const newLang = ev.target.value;
                            if (newLang === lang || !isLang(newLang)) return;

                            setLang(newLang);
                            setProg(randomCode(difficulty, newLang));
                            setRealOutput("");
                            setUserOutput("");
                            focusTextField();
                            storeLang(newLang);
                        }}
                    >
                        <option value="java">Java</option>
                    </select>
                </label>
            </header>

            <section className="display-source">
                <p>What will the following code print?</p>
                <Code code={prog.displaySource} />
            </section>

            <section className="output">
                <p>Output:</p>

                {realOutput ? (
                    correct ? (
                        <>
                            <p className="correct">Correct!</p>

                            <button
                                className="correct"
                                onClick={() => {
                                    setProg(randomCode(difficulty, lang));
                                    setRealOutput("");
                                    setUserOutput("");
                                    focusTextField();
                                }}
                            >
                                Next
                            </button>
                        </>
                    ) : (
                        <>
                            <div>
                                <pre className="wrong">{userOutput}</pre>
                                <br />
                                <pre className="correct">{realOutput}</pre>
                            </div>

                            <button
                                className="wrong"
                                onClick={() => {
                                    setProg(randomCode(difficulty, lang));
                                    setRealOutput("");
                                    setUserOutput("");
                                    focusTextField();
                                }}
                            >
                                Retry
                            </button>
                        </>
                    )
                ) : (
                    <>
                        <textarea
                            value={userOutput}
                            onChange={(ev) => {
                                setUserOutput(ev.target.value);
                            }}
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck="false"
                            autoFocus
                        ></textarea>

                        <button
                            onClick={() => {
                                try {
                                    const out = prog.js();
                                    setRealOutput(out);
                                    setCorrect(isEqual(out, userOutput));
                                } catch (e) {
                                    console.error(e);
                                }
                            }}
                        >
                            Check
                        </button>
                    </>
                )}
            </section>
        </>
    );
};
