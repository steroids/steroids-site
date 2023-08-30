import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {IEntityInfo} from 'types/IEntityInfo';
import _isEmpty from 'lodash-es/isEmpty';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import Title from '@steroidsjs/core/ui/typography/Title';
import {goToRoute} from '@steroidsjs/core/actions/router';
import {ITitleProps} from '@steroidsjs/core/ui/typography/Title/Title';
// eslint-disable-next-line import/no-extraneous-dependencies
import {useUnmount} from 'react-use';
import {useComponents, useDispatch} from '@steroidsjs/core/hooks';
import {listSetItems} from '@steroidsjs/core/actions/list';
import {scrollToElement} from 'utils/utils';
import {checkAndCreateTypeLink} from 'helpers/apiTable';
import _upperFirst from 'lodash-es/upperFirst';

import './ApiTable.scss';
import {LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';

interface IApiTableProps {
    entityInfo: IEntityInfo,
    titleProps?: ITitleProps,
    listId: string,
    className?: string,
}

export default function ApiTable(props: IApiTableProps) {
    const bem = useBem('ApiTable');
    const dispatch = useDispatch();
    const {locale} = useComponents();

    const onLinkClick = React.useCallback((routeId: string, routeParams: Record<string, any>) => {
        dispatch(goToRoute(
            routeId,
            {
                ...routeParams,
                [LANGUAGE_ROUTE_PARAM]: locale.language,
            },
        ));
        scrollToElement(`.${bem.element('title')}`);
    }, [bem, dispatch, locale]);

    useUnmount(() => {
        dispatch(listSetItems(props.listId, []));
    });

    if (_isEmpty(props.entityInfo?.properties) || !props.listId) {
        return null;
    }

    return (
        <div
            id={props.entityInfo.name}
            className={bem(bem.block(), props.className)}
        >
            <Title
                content='Component props'
                className={bem.element('title')}
                {...props.titleProps}
            />
            <div className={bem.element('grid-wrapper')}>
                <Grid
                    listId={props.listId}
                    items={props.entityInfo.properties}
                    columns={[
                        {
                            className: bem.element('name'),
                            label: 'Property',
                            valueView: ({item}) => item.name + (item.required ? '*' : ''),
                        },
                        {
                            className: bem.element('type'),
                            label: 'Type',
                            valueView: ({item}) => <code>{checkAndCreateTypeLink(item.type, onLinkClick)}</code>,
                        },
                        {
                            className: bem.element('default'),
                            label: 'Example',
                            valueView: ({item}) => <code>{item.example}</code>,
                        },
                        {
                            className: bem.element('descr'),
                            valueView: ({item}) => __(item.description),
                            label: 'Description',
                        },
                    ]}
                />
            </div>
        </div>
    );
}
