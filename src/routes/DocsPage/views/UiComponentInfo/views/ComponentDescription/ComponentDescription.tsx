import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text, Title} from '@steroidsjs/core/ui/typography';
import {IComponentInfo} from 'hooks/useUIComponentInfo';
import Selector from 'shared/Selector';
import Demos from '../Demos';

import './ComponentDescription.scss';

interface IComponentDescriptionProps {
    demosAnchors: {id: string, label: string}[]
    handleSelect: (id: string) => void;
    selectedDemo: any,
    demos: {
        title: string;
        component: any;
        sourceUrl: string;
        id: any;
    }[],
    componentInfo: IComponentInfo,
    componentName: string,
    className?: string;
}

export default function ComponentDescription(props: IComponentDescriptionProps) {
    const bem = useBem('ComponentDescription');

    return (
        <div className={bem(
            bem.block(),
            props.className,
        )}
        >
            <div className={bem.element('description')}>
                <Title content={props.componentName} />
                <Text
                    className={bem.element('text')}
                    content={props.componentInfo?.description}
                />
                <Demos demos={props.demos} />
            </div>
            <Selector
                items={props.demosAnchors}
                activeButton={props.selectedDemo}
                onClick={props.handleSelect}
                className={bem.element('navigation')}
            />
        </div>
    );
}
