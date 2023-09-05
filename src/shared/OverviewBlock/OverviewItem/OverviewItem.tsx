/* eslint-disable react/no-children-prop */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Card from '@steroidsjs/core/ui/content/Card';
import Link from '@steroidsjs/core/ui/nav/Link';
import {IListItemViewProps} from '@steroidsjs/core/ui/list/List/List';

import './OverviewItem.scss';
import {Icon} from '@steroidsjs/core/ui/content';

interface IOverviewItemProps extends IListItemViewProps{
    item: {
        toRoute: string,
        toRouteParams: Record<string, any>,
        label: string,
        imagePath: string,
        backgroundColor?: string,
        icon?: string,
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
                cover={(props.item.imagePath && !props.item.icon) && props.item.imagePath}
                style={{backgroundColor: props.item.backgroundColor}}
                children={props.item.icon && (
                    <Icon
                        className={bem.element('icon')}
                        name={props.item.icon}
                    />
                )}
            />
        </Link>
    );
}
