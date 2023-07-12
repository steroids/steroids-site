import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text} from '@steroidsjs/core/ui/typography';
import {SwitcherField} from '@steroidsjs/core/ui/form';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {IPropControl} from 'types/IPropControl';
import {SIZES} from '../../../../../../../data/interactive/interfactiveData';

import './ComponentOptions.scss';

interface IComponentOptionsProps {
    handleSizeClick: (size: string) => void;
    propControls: IPropControl<any>[],
}

export default function ComponentOptions(props: IComponentOptionsProps) {
    const bem = useBem('ComponentOptions');

    const handleControlChange = React.useCallback((smthng) => {
        console.log(smthng);
    }, []);

    return (
        <div className={bem.block()}>
            <div className={bem.element('item')}>
                <Text
                    content={__('Размер')}
                    className={bem.element('text')}
                />
                <ButtonGroup
                    items={SIZES}
                    onClick={props.handleSizeClick}
                />
            </div>
            <SwitcherField
                multiple
                items={props.propControls}
                onChange={handleControlChange}
            />
        </div>
    );
}
