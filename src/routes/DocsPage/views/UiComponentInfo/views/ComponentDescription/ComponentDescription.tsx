/* eslint-disable no-console */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text, Title} from '@steroidsjs/core/ui/typography';
import CustomNavigation from 'shared/CustomNavigation';
import {IEntityInfo} from 'types/IEntityInfo';
import {IDemo} from 'types/IDemo';
import Demos from '../Demos';

import './ComponentDescription.scss';

interface IComponentDescriptionProps {
    handleSelect: (id: string) => void;
    selectedDemo: string,
    demos: IDemo[],
    componentInfo: IEntityInfo,
    componentName: string,
    className?: string;
}

const translateComponentDescription = (componentName: string, description: string) => {
    let translatedDescription;
    try {
        translatedDescription = __(description);
    } catch (error) {
        console.error('Provided componentName/description ', componentName, '+', description, 'Error: ', error);
    }

    return translatedDescription;
};

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
                    content={translateComponentDescription(props.componentName, props.componentInfo?.description)}
                />
                <Demos demos={props.demos} />
            </div>
            <CustomNavigation
                items={props.demos.map(demo => demo.anchor)}
                activeButton={props.selectedDemo}
                onClick={props.handleSelect}
                className={bem.element('navigation')}
            />
        </div>
    );
}
