/* eslint-disable no-unused-expressions */
/* eslint-disable guard-for-in */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {IPropControl} from 'types/IPropControl';
import Section from 'shared/Section';
import _unset from 'lodash-es/unset';
import _isObject from 'lodash-es/isObject';
import _isArray from 'lodash-es/isArray';
import _isPlainObject from 'lodash-es/isPlainObject';
import _get from 'lodash-es/get';
import _set from 'lodash-es/set';
import _remove from 'lodash-es/remove';
import _isEqual from 'lodash-es/isEqual';
import ComponentNavigation from './views/ComponentNavigation';
import ComponentPresent from './views/ComponentPresent';
import ComponentOptions from './views/ComponentOptions';
import {components} from '../../../../data/interactiveBlockData';

import './InteractiveSection.scss';

const DEFAULT_SIZE = 'sm';
const DEFAULT_COMPONENT_NAME = 'input';
const DEFAULT_BUTTON_COLOR = 'primary';

const createProps = (selectedControlsIds: number[], componentName: string, controls: IPropControl[]) => {
    const props = {...components[componentName].props};

    const notSelectedControls = controls?.filter(control => !selectedControlsIds.includes(control.id));

    notSelectedControls?.forEach(notSelectedControl => {
        _unset(props, notSelectedControl.path);
    });

    controls?.forEach(currentControl => {
        if (selectedControlsIds.includes(currentControl.id) && !!currentControl.addition) {
            let currentPropState = _get(props, currentControl.addition.path);

            if (_isPlainObject(currentPropState)) {
                currentPropState = {
                    ...currentPropState,
                    [currentControl.addition.extraName]: currentControl.addition.toAddition,
                };
            }

            if (_isArray(currentPropState)) {
                currentPropState = [
                    ...currentPropState,
                    currentControl.addition?.toAddition,
                ];
            }
            _set(props, currentControl.addition.path, currentPropState);
        }
    });

    return props;
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
        const resultProps = createProps(selectedControlsIds, currentComponentName, currentControls);

        setCurrentProps(resultProps);
        setSelectedIds(selectedControlsIds);
    }, [currentComponentName, currentControls]);

    const handleComponentClick = React.useCallback((selectedComponent: string) => {
        const newControls = components[selectedComponent].controls;
        const newSelectedIds = components[selectedComponent].controls
            ?.filter((control) => control.enabled).map(control => control.id);
        const newComponentProps = createProps(newSelectedIds, selectedComponent, newControls);

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
                <ComponentNavigation
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
