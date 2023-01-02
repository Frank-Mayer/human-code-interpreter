import React from "react";
import { useState } from "react";

type Props = {
    text: string;
};

export const Console = (props: Props) => {
    return (
        <pre className="console">
            <code>{props.text}</code>
        </pre>
    );
};
