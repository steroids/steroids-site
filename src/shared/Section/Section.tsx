import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text} from '@steroidsjs/core/ui/typography';

import './Section.scss';

const SEPARATOR = '-';
const START_OF_TITLE = 0;

interface ISectionProps {
    title?: string;
    description?: string;
    children?: any;
    className?: string;
    isGray?: boolean;
}

export default function Section(props: ISectionProps) {
    const bem = useBem('Section');

    const renderTitle = React.useCallback((title: string) => {
        const hasSeparator = title?.split('').includes(SEPARATOR);

        if (hasSeparator) {
            const indexOfSeparator = title.indexOf(SEPARATOR);
            const mainTitle = title.substring(START_OF_TITLE, indexOfSeparator);
            const postScript = title.substring(indexOfSeparator, title.length).replace(SEPARATOR, '');

            return (
                <span>
                    {mainTitle}
                    <span className={bem.element('title-postscript')}>
                        {postScript}
                    </span>
                </span>
            );
        }

        return title;
    }, [bem]);

    return (
        <section className={bem(
            bem.block({
                isGray: props.isGray,
            }),
            props.className,
        )}
        >
            <h3 className={bem.element('title')}>
                {renderTitle(props.title)}
            </h3>
            <Text
                className={bem.element('description')}
                content={props.description}
            />
            {props.children}
        </section>
    );
}
