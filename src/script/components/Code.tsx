import React from "react";
import Prism from "prismjs";
import loadLanguages from "prismjs/components/index";
import java from "prismjs/components/prism-java";

loadLanguages([java]);

type Props = {
    code: string;
};

export const Code = (props: Props) => (
    <pre>
        <code
            dangerouslySetInnerHTML={{
                __html: Prism.highlight(
                    props.code,
                    Prism.languages.java,
                    "java"
                ),
            }}
        />
    </pre>
);
