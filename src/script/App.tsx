import React from "react";
import { Code } from "./components/Code";
import { randomCode } from "./tools/randomCode";
import type { JProg } from "./tools/Java/JProg";

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

    return parseInt(difficulty);
};

const storeDifficulty = (difficulty: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("difficulty", difficulty.toString());
    window.history.replaceState({}, "", url.href);
};

export const App = () => {
    const [difficulty, setDifficulty] = React.useState(getDifficulty());
    const [prog, setProg] = React.useState<JProg>();
    const [userOutput, setUserOutput] = React.useState("");
    const [realOutput, setRealOutput] = React.useState("");
    const [correct, setCorrect] = React.useState(false);

    if (!prog) {
        setProg(randomCode(difficulty));
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
                            setProg(randomCode(newDifficulty));
                            storeDifficulty(newDifficulty);
                            setRealOutput("");
                            setUserOutput("");
                        }}
                    >
                        <option value={1}>Easy</option>
                        <option value={2}>Medium</option>
                        <option value={3}>Hard</option>
                        <option value={4}>Yes</option>
                    </select>
                </label>
            </header>

            <section className="java-source">
                <p>What will the following code print?</p>
                <Code code={prog.java} />
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
                                    setProg(randomCode(difficulty));
                                    setRealOutput("");
                                    setUserOutput("");
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
                                    setProg(randomCode(difficulty));
                                    setRealOutput("");
                                    setUserOutput("");
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
