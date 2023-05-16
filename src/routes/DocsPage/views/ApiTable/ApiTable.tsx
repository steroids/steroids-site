import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {IEntityInfo} from 'types/IEntityInfo';
import _isEmpty from 'lodash-es/isEmpty';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import Title from '@steroidsjs/core/ui/typography/Title';
import {ITitleProps} from '@steroidsjs/core/ui/typography/Title/Title';
// eslint-disable-next-line import/no-extraneous-dependencies
import {useUnmount} from 'react-use';

import './ApiTable.scss';
import {useDispatch} from '@steroidsjs/core/hooks';
import {listSetItems} from '@steroidsjs/core/actions/list';
import {getInterfaceFromType} from 'helpers/apiTable';
import Link from '@steroidsjs/core/ui/nav/Link';

interface IApiTableProps {
    entityInfo: IEntityInfo,
    titleProps?: ITitleProps,
    listId: string,
    className?: string,
}

const checkAndCreateTypeLink = (type: string) => {
    const interfacePresencePattern = /I.*/;
    const interfacePattern = /^I\w+$/;
    const propsInterfacePattern = /^I\w+Props$/;

    if (interfacePresencePattern.test(type)) {
        const interfaceName = getInterfaceFromType(type, interfacePattern);

        // if (propsInterfacePattern.test(interfaceName)) {
        //     return (
        //         <Link
        //             url={}
        //         />
        //     )
        // }
        return (
            <a href={`#${interfaceName}`}>
                {type}
            </a>
        );
    }
    return type;
};

export default function ApiTable(props: IApiTableProps) {
    const bem = useBem('ApiTable');
    const dispatch = useDispatch();

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
                {...props.titleProps}
            />
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
                        valueView: ({item}) => <code>{checkAndCreateTypeLink(item.type)}</code>,
                    },
                    {
                        className: bem.element('default'),
                        label: 'Example',
                        valueView: ({item}) => <code>{item.example}</code>,
                    },
                    {
                        className: bem.element('descr'),
                        attribute: 'description',
                        label: 'Description',
                    },
                ]}
            />
        </div>
    );
}
