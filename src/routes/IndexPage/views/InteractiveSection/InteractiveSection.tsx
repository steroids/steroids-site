import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Section from 'shared/Section';
import ComponentSelector from './views/ComponentSelector';
import ComponentPresent from './views/ComponentPresent';
import ComponentOptions from './views/ComponentOptions';
import {COMPONENTS, DEFAULT_SIZE} from '../../../../../data/interactive/interfactiveData';

import './InteractiveSection.scss';

export default function InteractiveSection() {
    const bem = useBem('InteractiveSection');
    const [size, setSize] = React.useState(DEFAULT_SIZE);
    const [component, setComponent] = React.useState<any>(() => COMPONENTS.Input.component);
    const [props, setProps] = React.useState(COMPONENTS.Input.props);
    const [controls, setControls] = React.useState(COMPONENTS.Input.controls);

    const handleSizeClick = React.useCallback((newSize: string) => {
        setSize(newSize);
    }, []);

    const handleComponentClick = React.useCallback((selectedComponent: string) => {
        const newControls = COMPONENTS[selectedComponent].controls;
        const newComponentProps = COMPONENTS[selectedComponent].props;
        const newComponent = () => COMPONENTS[selectedComponent].component;
        setControls(newControls);
        setProps(newComponentProps);
        setComponent(newComponent);
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
                    handleSizeClick={handleSizeClick}
                    propControls={controls}
                />
            </div>
        </Section>
    );
}
