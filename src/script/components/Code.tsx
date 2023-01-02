import React from "react";

import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import Java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import style from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

SyntaxHighlighter.registerLanguage("java", Java);

type Props = {
    code: string;
};

export const Code = (props: Props) => (
    <SyntaxHighlighter language="java" style={style} showLineNumbers wrapLines>
        {props.code}
    </SyntaxHighlighter>
);
