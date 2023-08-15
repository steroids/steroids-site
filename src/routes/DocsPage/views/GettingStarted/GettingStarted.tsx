/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Markdown from 'markdown-to-jsx';
import {useDocsMarkdown} from 'hooks/useDocsMarkdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {darcula as CodeStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';
//atomDark cb coldarkDark darcula dracula materialDark nord oneDark oneLight
import './GettingStarted.scss';

const CodeBlock = ({className, children}) => {
    let lang = 'text'; // default monospaced text
    if (className && className.startsWith('lang-')) {
        lang = className.replace('lang-', '');
    }
    return (
        <SyntaxHighlighter
            language={lang}
            style={CodeStyle}
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
    const {markdownContent} = useDocsMarkdown();

    return (
        <article className={bem.block()}>
            {markdownContent && (
                <Markdown
                    options={{
                        ...MARKDOWN_OPTIONS,
                    }}

                >
                    {markdownContent}
                </Markdown>
            )}
        </article>
    );
}
