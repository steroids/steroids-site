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
import {COMPONENTS, DEFAULT_COMPONENT_NAME, DEFAULT_SIZE} from '../../../../../data/interactive/interfactiveData';

import './InteractiveSection.scss';

export default function InteractiveSection() {
    const bem = useBem('InteractiveSection');
    const [size, setSize] = React.useState(DEFAULT_SIZE);
    const [component, setComponent] = React.useState<any>(() => COMPONENTS.Input.component);
    const [props, setProps] = React.useState(COMPONENTS.Input.props);
    const [controls, setControls] = React.useState(COMPONENTS.Input.controls);
    const [currentComponentName, setCurrentComponentName] = React.useState(DEFAULT_COMPONENT_NAME);
    const [selectedIds, setSelectedIds] = React.useState(COMPONENTS.Input.controls
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

    const handleSizeClick = React.useCallback((newSize: string) => {
        setSize(newSize);
    }, []);

    const handleControlChange = React.useCallback((selectedControlsIds: number[]) => {
        const resultProps = {...COMPONENTS[currentComponentName].props};

        const notSelectedControls = controls?.filter(control => !selectedControlsIds.includes(control.id));

        notSelectedControls?.forEach(notSelectedControl => {
            __unset(resultProps, [notSelectedControl.propName]);
        });

        setProps(resultProps);
        setSelectedIds(selectedControlsIds);
    }, [controls, currentComponentName]);

    const handleComponentClick = React.useCallback((selectedComponent: string) => {
        const newControls = COMPONENTS[selectedComponent].controls;
        const newComponentProps = getInitialProps(COMPONENTS[selectedComponent].props, newControls);
        const newComponent = () => COMPONENTS[selectedComponent].component;
        const newSelectedIds = COMPONENTS[selectedComponent].controls
            ?.filter((control) => control.enabled === true).map(control => control.id);

        setControls(newControls);
        setProps(newComponentProps);
        setComponent(newComponent);
        setCurrentComponentName(selectedComponent);
        setSelectedIds(newSelectedIds);
    }, []);

    return (
        <Section
            title={__('Попробуйте сами')}
            className={bem.block()}
            isGray
        >
            <div className={bem.element('wrapper')}>
                <ComponentSelector handleComponentClick={handleComponentClick} />
                <ComponentPresent
                    component={component}
                    className={bem.element('present')}
                    componentProps={{
                        size,
                        ...props,
                    }}
                />
                <ComponentOptions
                    size={size}
                    currentComponent={currentComponentName}
                    handleSizeClick={handleSizeClick}
                    propControls={controls}
                    handleControlsChange={handleControlChange}
                    selectedIds={selectedIds}
                />
            </div>
        </Section>
    );
}
