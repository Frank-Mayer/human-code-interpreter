import type { Lang } from "../tools/Lang";
import React from "react";
import Prism from "prismjs";

Prism.manual = true;

type Props = {
    lang: Lang;
    code: string;
};

export const Code = (props: Props) => {
    const grammar =
        props.lang === "java" ? Prism.languages.java : Prism.languages.cpp;

    return (
        <pre>
            <code
                className={`language-${props.lang}`}
                dangerouslySetInnerHTML={{
                    __html: Prism.highlight(props.code, grammar, props.lang),
                }}
            />
        </pre>
    );
};
