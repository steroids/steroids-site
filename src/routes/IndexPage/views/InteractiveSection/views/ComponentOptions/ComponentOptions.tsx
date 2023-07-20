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
    propControls: IPropControl[];
    handleControlsChange: (selectedControlsIds: number[]) => void;
    currentComponent: string;
    selectedIds: number[];
    size: string;
    className?: string;
}

export default function ComponentOptions(props: IComponentOptionsProps) {
    const bem = useBem('ComponentOptions');

    return (
        <div className={bem(
            bem.block(),
            props.className,
        )}
        >
            {props.currentComponent !== 'Card' && (
                <div>
                    <Text
                        content={__('Размер')}
                        className={bem.element('text')}
                    />
                    <ButtonGroup
                        items={SIZES}
                        activeButton={props.size}
                        onClick={props.handleSizeClick}
                        className={bem.element('sizes')}
                        buttonProps={{
                            size: 'sm',
                        }}
                    />
                </div>
            )}
            <SwitcherField
                multiple
                items={props.propControls}
                onChange={props.handleControlsChange}
                selectedIds={props.selectedIds}
                size="lg"
            />
        </div>
    );
}
