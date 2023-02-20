import React from "react";
import { Code } from "./components/Code";
import { compare } from "./tools/compare";
import { isLang, Lang } from "./tools/Lang";
import { randomCode } from "./tools/randomCode";
import { VirtualProg } from "./tools/VirtualProg";

const normalize = (a: string) => {
    return a.trim().replace(/\s+/g, " ");
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
    const [correct, setCorrect] = React.useState(0);
    const [lang, setLang] = React.useState(getLang());

    if (!prog) {
        return randomCode(difficulty, lang).match(
            (newCode) => {
                setProg(newCode);
                focusTextField();
                return <p>Loading...</p>;
            },
            (err) => {
                console.error(err);
                return <p>Error: {err}</p>;
            }
        );
    }

    return (
        <>
            <header className="app__header">
                <label>
                    Difficulty:
                    <select
                        value={difficulty}
                        onChange={(ev) => {
                            const newDifficulty = parseInt(ev.target.value);
                            if (newDifficulty === difficulty) return;
                            randomCode(newDifficulty, lang).match(
                                (newCode) => {
                                    setDifficulty(newDifficulty);
                                    setProg(newCode);
                                    setRealOutput("");
                                    setUserOutput("");
                                    focusTextField();
                                    storeDifficulty(newDifficulty);
                                },
                                (err) => {
                                    console.error(err);
                                }
                            );
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

                            randomCode(difficulty, newLang).match(
                                (newCode) => {
                                    setLang(newLang);
                                    setProg(newCode);
                                    setRealOutput("");
                                    setUserOutput("");
                                    focusTextField();
                                    storeLang(newLang);
                                },
                                (err) => {
                                    console.error(err);
                                }
                            );
                        }}
                    >
                        <option value="java">Java</option>
                    </select>
                </label>
            </header>

            <section className="app__display-source">
                <p>What will the following code print?</p>
                <Code code={prog.displaySource} />
            </section>

            <section className="app__output output">
                <p>Output:</p>

                {realOutput ? (
                    correct === 100 ? (
                        <>
                            <p className="output__element--correct">Correct!</p>

                            <button
                                className="output__element--correct button"
                                onClick={() => {
                                    randomCode(difficulty, lang).match(
                                        (newCode) => {
                                            setProg(newCode);
                                            setRealOutput("");
                                            setUserOutput("");
                                            focusTextField();
                                        },
                                        (err) => {
                                            console.error(err);
                                        }
                                    );
                                }}
                            >
                                Next
                            </button>
                        </>
                    ) : (
                        <>
                            <div>
                                <pre className="output__element--wrong">
                                    {userOutput}
                                </pre>
                                <br />
                                <pre className="output__element--correct">
                                    {realOutput}
                                </pre>
                            </div>

                            <button
                                className="output__element--wrong button"
                                onClick={() => {
                                    randomCode(difficulty, lang).match(
                                        (newCode) => {
                                            setProg(newCode);
                                            setRealOutput("");
                                            setUserOutput("");
                                            focusTextField();
                                        },
                                        (err) => {
                                            console.error(err);
                                        }
                                    );
                                }}
                            >
                                {Number.isSafeInteger(correct)
                                    ? `${correct}% Correct – Retry`
                                    : "Retry"}
                            </button>
                        </>
                    )
                ) : (
                    <>
                        <textarea
                            className="output__input"
                            value={userOutput}
                            onChange={(ev) => {
                                setUserOutput(ev.target.value);
                            }}
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck="false"
                            autoFocus
                        ></textarea>

                        <p className="button-wrapper">
                            <button
                                className="button button-wrapper__button"
                                onClick={() => {
                                    randomCode(difficulty, lang).match(
                                        (newCode) => {
                                            setProg(newCode);
                                            setRealOutput("");
                                            setUserOutput("");
                                            setCorrect(0);
                                            focusTextField();
                                        },
                                        (err) => {
                                            console.error(err);
                                        }
                                    );
                                }}
                            >
                                Skip
                            </button>
                            <button
                                className="button button-wrapper__button--primary"
                                onClick={() => {
                                    try {
                                        const out = prog.js();
                                        setRealOutput(out);
                                        setCorrect(
                                            compare(
                                                normalize(out),
                                                normalize(userOutput)
                                            )
                                        );
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }}
                            >
                                Check
                            </button>
                        </p>
                    </>
                )}
            </section>
        </>
    );
};
