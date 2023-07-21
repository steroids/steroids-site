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
import {components, defaultButtonColor} from '../../../../data/interactiveBlockData';

import './InteractiveSection.scss';

export const DEFAULT_SIZE = 'sm';
export const DEFAULT_COMPONENT_NAME = 'input';

export default function InteractiveSection() {
    const bem = useBem('InteractiveSection');
    const [size, setSize] = React.useState(DEFAULT_SIZE);
    const [component, setComponent] = React.useState<any>(() => components.input.component);
    const [currentProps, setCurrentProps] = React.useState(components.input.props);
    const [currentComponentName, setCurrentComponentName] = React.useState(DEFAULT_COMPONENT_NAME);
    const [buttonColor, setButtonColor] = React.useState(defaultButtonColor);
    const currentControls = React.useMemo(() => components[currentComponentName].controls, [currentComponentName]);
    const [selectedIds, setSelectedIds] = React.useState(components.input.controls
        ?.filter((control) => control.enabled === true).map(control => control.id));

    const getInitialProps = (defaultProps: Record<string, any>, defaultControls: IPropControl[]) => {
        const resultProps = {
            ...defaultProps,
        };

        defaultControls?.forEach(defaultControl => {
            defaultControl.enabled === false ? __unset(resultProps, [defaultControl.propName]) : null;
        });

        return resultProps;
    };

    const handleButtonColorClick = React.useCallback((newColor: string) => {
        setButtonColor(newColor);
    }, []);

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
        const newComponent = () => components[selectedComponent].component;
        const newSelectedIds = components[selectedComponent].controls
            ?.filter((control) => control.enabled === true).map(control => control.id);

        setCurrentProps(newComponentProps);
        setComponent(newComponent);
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
                    component={component}
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
                    handleButtonColorClick={handleButtonColorClick}
                    buttonColor={buttonColor}
                    selectedIds={selectedIds}
                />
            </div>
        </Section>
    );
}
