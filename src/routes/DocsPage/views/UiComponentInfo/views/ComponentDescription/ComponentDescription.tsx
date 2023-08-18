/* eslint-disable no-console */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text, Title} from '@steroidsjs/core/ui/typography';
import CustomNavigation from 'shared/CustomNaviagtion';
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

export default function ComponentDescription(props: IComponentDescriptionProps) {
    const bem = useBem('ComponentDescription');

    const getComponentDescription = React.useCallback((message: string) => {
        let content;
        try {
            content = __(message);
        } catch (error) {
            console.error('Provided componentName: ', props.componentName);
            console.error('Provided componentInfo: ', props.componentInfo);
            console.error('Provided message: ', message);
            console.error(error);
        }

        return content;
    }, [props.componentInfo, props.componentName]);

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
                    content={getComponentDescription(props.componentInfo?.description)}
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
