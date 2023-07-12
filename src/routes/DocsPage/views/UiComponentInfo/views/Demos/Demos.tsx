import React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import _isEmpty from 'lodash-es/isEmpty';
import {IDemo} from 'types/IDemo';
import DemoCard from '../DemoCard';

import './Demos.scss';

interface IDemosProps {
    demos: IDemo[];
}

export default function Demos(props: IDemosProps) {
    const bem = useBem('Demos');

    return (
        <div className={bem.block()}>
            {props.demos.map((demo, demoIndex) => (
                <DemoCard
                    key={demoIndex}
                    demo={demo.component}
                    title={demo.title}
                    sourceUrl={demo.sourceUrl}
                />
            ))}
        </div>
    );
}
