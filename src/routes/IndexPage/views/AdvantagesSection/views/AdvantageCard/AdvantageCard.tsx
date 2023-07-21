import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text} from '@steroidsjs/core/ui/typography';

import './AdvantageCard.scss';

interface IAdvantageCardProps {
    description: string;
    img: string;
}

export default function AdvantageCard(props: IAdvantageCardProps) {
    const bem = useBem('AdvantageCard');

    return (
        <div className={bem.block()}>
            <div className={bem.element('img-wrapper')}>
                <img
                    src={props.img}
                    alt="advantage"
                />
            </div>
            <Text
                className={bem.element('description')}
                content={props.description}
            />
        </div>
    );
}
