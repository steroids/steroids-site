/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Markdown from 'markdown-to-jsx';
import {useDocsMarkdown} from 'hooks/useDocsMarkdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {syntaxHighlighterStyle} from 'data/syntaxHighlighterStyle';

import './GettingStarted.scss';
import Link from '@steroidsjs/core/ui/nav/Link';

const CodeBlock = ({className, children}) => {
    let lang = 'text'; // default monospaced text
    if (className && className.startsWith('lang-')) {
        lang = className.replace('lang-', '');
    }
    return (
        <SyntaxHighlighter
            language={lang}
            style={syntaxHighlighterStyle}
        >
            {children}
        </SyntaxHighlighter>
    );
};

const PreBlock = ({children, ...rest}) => {
    if ('type' in children && children.type === 'code') {
        return CodeBlock(children.props);
    }
    return <pre {...rest}>{children}</pre>;
};

const MARKDOWN_OPTIONS = {
    enforceAtxHeadings: true,
    overrides: {
        pre: PreBlock,
    },
};

export default function GettingStarted() {
    const bem = useBem('GettingStarted');
    const {docsContent} = useDocsMarkdown();

    return (
        <article className={bem.block()}>
            {docsContent && (
                <Markdown
                    options={{
                        ...MARKDOWN_OPTIONS,
                    }}
                >
                    {docsContent}
                </Markdown>
            )}
        </article>
    );
}
