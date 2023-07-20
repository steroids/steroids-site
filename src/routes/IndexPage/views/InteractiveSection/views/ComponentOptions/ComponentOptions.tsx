import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text} from '@steroidsjs/core/ui/typography';
import {SwitcherField} from '@steroidsjs/core/ui/form';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import {IPropControl} from 'types/IPropControl';
import {buttonColors, components, sizes} from '../../../../../../data/interactiveBlockData';

import './ComponentOptions.scss';

interface IComponentOptionsProps {
    handleSizeClick: (size: string) => void;
    handleButtonColorClick: (newColor: string) => void;
    propControls: IPropControl[];
    handleControlsChange: (selectedControlsIds: number[]) => void;
    currentComponent: string;
    size: string;
    buttonColor: string;
}

function ComponentOptions(props: IComponentOptionsProps) {
    const bem = useBem('ComponentOptions');

    const defaultSelectedIds = React.useMemo(
        () => props.propControls?.filter((control) => control.enabled).map(control => control.id),
        [props.propControls],
    );

    const hasSizeControl = components[props.currentComponent].hasSizeControl;
    const hasColorControl = components[props.currentComponent].hasColorControl;

    return (
        <div className={bem.block()}>
            {hasSizeControl && (
                <div>
                    <Text
                        content={__('Размер')}
                        className={bem.element('text')}
                    />
                    <ButtonGroup
                        items={sizes}
                        activeButton={props.size}
                        onClick={props.handleSizeClick}
                        className={bem.element('btn-groups')}
                        buttonProps={{
                            size: 'sm',
                        }}
                    />
                </div>
            )}
            {hasColorControl && (
                <div>
                    <Text
                        content={__('Цвет')}
                        className={bem.element('text')}
                    />
                    <ButtonGroup
                        items={buttonColors}
                        activeButton={props.buttonColor}
                        onClick={props.handleButtonColorClick}
                        className={bem.element('btn-groups')}
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
                selectedIds={defaultSelectedIds}
                size="lg"
            />
        </div>
    );
}

export default memo(ComponentOptions);
