import React from "react";
import { Code } from "./components/Code";
import { randomCode } from "./tools/randomCode";

export const App = () => {
    const [difficulty, setDifficulty] = React.useState(1);
    const [prog, setProg] = React.useState(randomCode(difficulty));
    const [userOutput, setUserOutput] = React.useState("");
    const [realOutput, setRealOutput] = React.useState("");
    const [correct, setCorrect] = React.useState(false);

    return (
        <>
            <header className="header">
                <label>
                    Difficulty:
                    <select
                        value={difficulty}
                        onChange={(ev) => {
                            const newDifficulty = parseInt(ev.target.value);
                            setDifficulty(newDifficulty);
                            setProg(randomCode(newDifficulty));
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
                            onChange={(ev) => setUserOutput(ev.target.value)}
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck="false"
                        ></textarea>

                        <button
                            onClick={() => {
                                try {
                                    const out = prog.js();
                                    setRealOutput(out);
                                    setCorrect(out === userOutput);
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
