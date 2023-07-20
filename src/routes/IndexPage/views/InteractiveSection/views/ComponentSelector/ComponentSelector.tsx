import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {useScreen} from '@steroidsjs/core/hooks';
import {COMPONENTS_LIST} from '../../../../../../../data/interactive/interfactiveData';

import './ComponentSelector.scss';

interface IComponentSelectorProps {
    handleComponentClick: (component: string) => void;
    className?: string;
}

export default function ComponentSelector(props: IComponentSelectorProps) {
    const bem = useBem('ComponentSelector');

    const {isPhone} = useScreen();
    const actualComponents = React.useMemo(
        () => {
            if (isPhone()) {
                const newComponents = [...COMPONENTS_LIST];

                return newComponents.filter((component) => component.id !== 'Card');
            }

            return COMPONENTS_LIST;
        },
        [isPhone],
    );

    return (
        <div className={bem(
            bem.block(),
            props.className,
        )}
        >
            <div className={bem.element('decoration')} />
            <ButtonGroup
                className={bem.element('components')}
                items={actualComponents}
                onClick={props.handleComponentClick}
                buttonProps={{
                    link: true,
                }}
            />
        </div>
    );
}
