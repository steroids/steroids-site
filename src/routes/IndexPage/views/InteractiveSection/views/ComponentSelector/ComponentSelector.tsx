import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {components} from '../../../../../../data/interactiveBlockData';

import './ComponentSelector.scss';

interface IComponentSelectorProps {
    handleComponentClick: (component: string) => void;
}

function ComponentSelector(props: IComponentSelectorProps) {
    const bem = useBem('ComponentSelector');

    return (
        <div className={bem.block()}>
            <div className={bem.element('decoration')} />
            <ButtonGroup
                className={bem.element('components')}
                items={Object.keys(components)}
                onClick={props.handleComponentClick}
                buttonProps={{
                    link: true,
                }}
            />
        </div>
    );
}

export default memo(ComponentSelector);
