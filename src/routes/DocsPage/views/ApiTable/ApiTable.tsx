import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {IEntityInfo} from 'types/IEntityInfo';
import _isEmpty from 'lodash-es/isEmpty';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import Title from '@steroidsjs/core/ui/typography/Title';
import {ITitleProps} from '@steroidsjs/core/ui/typography/Title/Title';

import './ApiTable.scss';

interface IApiTableProps {
    entityInfo: IEntityInfo,
    titleProps?: ITitleProps,
    listId: string,
    className?: string,
}

export default function ApiTable(props: IApiTableProps) {
    const bem = useBem('ApiTable');

    console.log(props.listId, 'listId');

    if (_isEmpty(props.entityInfo?.properties) || !props.listId) {
        return null;
    }

    return (
        <div className={bem(bem.block(), props.className)}>
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
                        valueView: ({item}) => <code>{item.type}</code>,
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
