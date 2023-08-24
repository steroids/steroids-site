/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import {CATEGORY_GETTING_STARTED} from 'constants/categories';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Markdown from 'markdown-to-jsx';
import {useDocsMarkdown} from 'hooks/useDocsMarkdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {syntaxHighlighterStyle} from 'data/syntaxHighlighterStyle';
import {useDocsPageData} from 'hooks/useDocsPageData';
import {getChildrenItemsByCategory} from 'utils/utils';
import {Title} from '@steroidsjs/core/ui/typography';
import Nav from '@steroidsjs/core/ui/nav/Nav';

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

    const renderDefaultGettingStarted = () => (
        <div className={bem.element('default')}>
            <Title content={__('Сводка статей:')} />
            <Nav
                layout='link'
                items={getChildrenItemsByCategory(treeItems, CATEGORY_GETTING_STARTED)}
            />
        </div>
    );

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
            {!docsContent && renderDefaultGettingStarted()}
        </article>
    );
}
