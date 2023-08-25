import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Card} from '@steroidsjs/core/ui/content';

import './ResourceCard.scss';
import Link from '@steroidsjs/core/ui/nav/Link';
import {useComponents} from '@steroidsjs/core/hooks';
import {LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';

interface IResourceCardProps {
    img: string;
    title: string;
    description: string
    toRoute?: string,
    url?: string,
    target?: string;
    toRouteParams?: Record<string, any>;
}

export default function ResourceCard(props: IResourceCardProps) {
    const bem = useBem('ResourceCard');
    const {locale} = useComponents();

    return (
        <Link
            toRoute={props.toRoute}
            url={props.url}
            target={props.target}
            toRouteParams={{
                [LANGUAGE_ROUTE_PARAM]: locale.language,
                ...props.toRouteParams,
            }}
        >
            <Card
                className={bem.block()}
                title={props.title}
                description={props.description}
                cover={props.img}
            />
        </Link>
    );
}
