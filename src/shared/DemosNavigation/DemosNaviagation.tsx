import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {IButtonGroupProps} from '@steroidsjs/core/ui/nav/ButtonGroup/ButtonGroup';

import './DemosNavigation.scss';

type IDemosNavigationProps = IButtonGroupProps

export default function DemosNavigation(props: IDemosNavigationProps) {
    const bem = useBem('DemosNavigation');

    return (
        <div className={bem(
            bem.block(),
            props.className,
        )}
        >
            <div className={bem.element('decoration')} />
            <ButtonGroup
                className={bem.element('elements')}
                items={props.items}
                onClick={props.onClick}
                buttonProps={{
                    link: true,
                }}
                activeButton={props.activeButton}
            />
        </div>
    );
}
