/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Markdown from 'markdown-to-jsx';
import {useDocsMarkdown} from 'hooks/useDocsMarkdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {syntaxHighlighterStyle} from 'data/syntaxHighlighterStyle';
import {useDocsPageData} from 'hooks/useDocsPageData';
import GettingStartedOverview from './views/GettingStartedOverview';

import './GettingStarted.scss';

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
    const {treeItems} = useDocsPageData();

    return (
        <div className={bem.block()}>
            {docsContent && (
                <div className={bem.element('article')}>
                    <Markdown
                        options={{
                            ...MARKDOWN_OPTIONS,
                        }}
                    >
                        {docsContent}
                    </Markdown>
                </div>
            )}
            {!docsContent && <GettingStartedOverview />}
        </div>
    );
}
