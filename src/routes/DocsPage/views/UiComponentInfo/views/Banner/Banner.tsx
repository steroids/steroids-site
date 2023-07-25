import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Title} from '@steroidsjs/core/ui/typography';

import './Banner.scss';

interface IBannerProps {
    componentName: string,
}

function Banner(props: IBannerProps) {
    const bem = useBem('Banner');

    return (
        <div className={bem.block()}>
            <Title
                className={bem.element('title')}
                content={props.componentName}
            />
        </div>
    );
}

export default memo(Banner);
