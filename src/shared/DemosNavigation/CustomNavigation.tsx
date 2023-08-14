import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {IButtonGroupProps} from '@steroidsjs/core/ui/nav/ButtonGroup/ButtonGroup';

import './CustomNavigation.scss';

type ICustomNavigationProps = IButtonGroupProps

export default function CustomNavigation(props: ICustomNavigationProps) {
    const bem = useBem('CustomNavigation');

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
