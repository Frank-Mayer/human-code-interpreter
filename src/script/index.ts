import "@total-typescript/ts-reset";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

try {
    createRoot(document.getElementById("root")!).render(
        React.createElement(App)
    );
} catch (e) {
    console.error(e);

    if (e instanceof Error) {
        alert(`${e.name}\n${e.message}`);
    }
}
