/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';

import './HeaderLogo.scss';

interface IHeaderLogoProps {
    onClick: () => void;
}

export default function HeaderLogo(props: IHeaderLogoProps) {
    const bem = useBem('HeaderLogo');

    return (
        <div
            onClick={props.onClick}
            className={bem.block()}
        >
            <Icon
                name='logo'
                className={bem.element('icon')}
            />
            <h1 className={bem.element('title')}>
                {__('Steroids')}
            </h1>
        </div>
    );
}
