import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text} from '@steroidsjs/core/ui/typography';

import './AdvantageCard.scss';
import {Icon} from '@steroidsjs/core/ui/content';

interface IAdvantageCardProps {
    description: string;
    icon: string;
}

export default function AdvantageCard(props: IAdvantageCardProps) {
    const bem = useBem('AdvantageCard');

    return (
        <div className={bem.block()}>
            <div className={bem.element('icon-wrapper')}>
                <Icon name={props.icon} />
            </div>
            <Text
                className={bem.element('description')}
                content={props.description}
            />
        </div>
    );
}
