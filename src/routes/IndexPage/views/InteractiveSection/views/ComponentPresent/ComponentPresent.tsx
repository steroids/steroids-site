import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';

import './ComponentPresent.scss';
import ThemesButtons from 'shared/ThemesButtons';

interface IComponentPresentProps {
    component: React.FunctionComponent<any>,
    className?: string;
    componentProps?: Record<string, any>;
}

export default function ComponentPresent(props: IComponentPresentProps) {
    const bem = useBem('ComponentPresent');

    const {component: Component} = props;

    return (
        <div className={bem(
            bem.block(),
            props.className,
        )}
        >
            <ThemesButtons className={bem.element('themes')} />
            <Component
                className={bem.element('component')}
                style={{width: 300}}
                {...props.componentProps}
            />
        </div>
    );
}
