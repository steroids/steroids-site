/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';

import './BurgerMenu.scss';

interface IBurgerMenuProps {
    onClick: () => void,
    isBurgerOpened: boolean,
}

export default function BurgerMenu(props: IBurgerMenuProps) {
    const bem = useBem('BurgerMenu');

    return (
        <div className={bem.block()}>
            <div
                className={bem.element('wrapper')}
                onClick={props.onClick}
            >
                <Icon
                    className={bem.element('button')}
                    name={props.isBurgerOpened ? 'cross_12x12' : 'burger'}
                />
            </div>
        </div>
    );
}
