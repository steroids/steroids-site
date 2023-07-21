/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {IPropControl} from 'types/IPropControl';
import Section from 'shared/Section';
import __unset from 'lodash-es/unset';
import ComponentSelector from './views/ComponentSelector';
import ComponentPresent from './views/ComponentPresent';
import ComponentOptions from './views/ComponentOptions';
import {components} from '../../../../data/interactiveBlockData';

import './InteractiveSection.scss';

const DEFAULT_SIZE = 'sm';
const DEFAULT_COMPONENT_NAME = 'input';
const DEFAULT_BUTTON_COLOR = 'primary';

const getInitialProps = (props: Record<string, any>, controls: IPropControl[]) => {
    const initialProps = {
        ...props,
    };

    controls?.forEach(control => {
        if (!control.enabled) {
            __unset(initialProps, [control.propName]);
        }
    });

    return initialProps;
};

export default function InteractiveSection() {
    const bem = useBem('InteractiveSection');

    const [size, setSize] = React.useState(DEFAULT_SIZE);
    const [buttonColor, setButtonColor] = React.useState(DEFAULT_BUTTON_COLOR);

    const [currentProps, setCurrentProps] = React.useState(components[DEFAULT_COMPONENT_NAME].props);
    const [currentComponentName, setCurrentComponentName] = React.useState(DEFAULT_COMPONENT_NAME);

    const [selectedIds, setSelectedIds] = React.useState(
        components[DEFAULT_COMPONENT_NAME].controls
            ?.filter((control) => control.enabled)
            .map(control => control.id),
    );

    const currentControls = React.useMemo(
        () => components[currentComponentName].controls,
        [currentComponentName],
    );

    const handleControlChange = React.useCallback((selectedControlsIds: number[]) => {
        const resultProps = {...components[currentComponentName].props};

        const notSelectedControls = currentControls?.filter(control => !selectedControlsIds.includes(control.id));

        notSelectedControls?.forEach(notSelectedControl => {
            __unset(resultProps, [notSelectedControl.propName]);
        });

        setCurrentProps(resultProps);
        setSelectedIds(selectedControlsIds);
    }, [currentComponentName, currentControls]);

    const handleComponentClick = React.useCallback((selectedComponent: string) => {
        const newControls = components[selectedComponent].controls;
        const newComponentProps = getInitialProps(components[selectedComponent].props, newControls);
        const newSelectedIds = components[selectedComponent].controls
            ?.filter((control) => control.enabled).map(control => control.id);

        setCurrentProps(newComponentProps);
        setCurrentComponentName(selectedComponent);
        setSelectedIds(newSelectedIds);
        setSize(DEFAULT_SIZE);
    }, []);

    return (
        <Section
            title={__('Попробуйте сами')}
            className={bem.block()}
            isGray
        >
            <div className={bem.element('wrapper')}>
                <ComponentSelector
                    className={bem.element('selector')}
                    handleComponentClick={handleComponentClick}
                />
                <ComponentPresent
                    component={components[currentComponentName].component}
                    className={bem.element('present')}
                    componentProps={{
                        size,
                        color: buttonColor,
                        ...currentProps,
                    }}
                />
                <ComponentOptions
                    size={size}
                    className={bem.element('options')}
                    currentComponent={currentComponentName}
                    handleSizeClick={(newSize) => setSize(newSize)}
                    propControls={currentControls}
                    handleControlsChange={handleControlChange}
                    handleButtonColorClick={(newColor) => setButtonColor(newColor)}
                    buttonColor={buttonColor}
                    selectedIds={selectedIds}
                />
            </div>
        </Section>
    );
}
