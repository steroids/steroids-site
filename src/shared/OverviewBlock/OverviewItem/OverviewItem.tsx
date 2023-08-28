import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Card from '@steroidsjs/core/ui/content/Card';
import Link from '@steroidsjs/core/ui/nav/Link';
import {IListItemViewProps} from '@steroidsjs/core/ui/list/List/List';

import './OverviewItem.scss';

interface IOverviewItemProps extends IListItemViewProps{
    item: {
        toRoute: string,
        toRouteParams: Record<string, any>,
        label: string,
        imagePath: string,
    }
}

export default function OverviewItem(props: IOverviewItemProps) {
    const bem = useBem('OverviewItem');

    return (
        <Link
            className={bem.block()}
            toRoute={props.item.toRoute}
            toRouteParams={props.item.toRouteParams}
        >
            <Card
                className={bem.element('card')}
                title={props.item.label}
                cover={props.item.imagePath}
            />
        </Link>
    );
}
