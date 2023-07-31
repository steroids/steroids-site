import React, {memo} from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import _isEmpty from 'lodash-es/isEmpty';
import {IDemo} from 'types/IDemo';
import DemoCard from '../DemoCard';

import './Demos.scss';

interface IDemosProps {
    demos: IDemo[];
    className?: string;
}

function Demos(props: IDemosProps) {
    const bem = useBem('Demos');

    return (
        <div className={bem(
            bem.block(),
            props.className,
        )}
        >
            {props.demos.map((demo, demoIndex) => (
                <DemoCard
                    id={demo.id}
                    key={demoIndex}
                    demo={demo.component}
                    title={demo.title}
                    sourceUrl={demo.sourceUrl}
                />
            ))}
        </div>
    );
}

export default memo(Demos);
