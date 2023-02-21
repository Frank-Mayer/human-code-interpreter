import React from "react";
import hljs from "highlight.js";

type Props = {
    code: string;
};

export const Code = (props: Props) => (
    <pre>
        <code
            dangerouslySetInnerHTML={{
                __html: hljs.highlightAuto(props.code).value,
            }}
        />
    </pre>
);
