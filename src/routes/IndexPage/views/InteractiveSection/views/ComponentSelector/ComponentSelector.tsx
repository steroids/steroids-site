import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {COMPONENTS_LIST} from '../../../../../../../data/interactive/interfactiveData';

import './ComponentSelector.scss';

interface IComponentSelectorProps {
    handleComponentClick: (component: string) => void;
}

export default function ComponentSelector(props: IComponentSelectorProps) {
    const bem = useBem('ComponentSelector');

    return (
        <div className={bem.block()}>
            <div className={bem.element('decoration')} />
            <ButtonGroup
                className={bem.element('components')}
                items={COMPONENTS_LIST}
                onClick={props.handleComponentClick}
                buttonProps={{
                    link: true,
                }}
            />
        </div>
    );
}
