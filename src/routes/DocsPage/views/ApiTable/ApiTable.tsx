import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {IEntityInfo} from 'types/IEntityInfo';
import _isEmpty from 'lodash-es/isEmpty';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import Title from '@steroidsjs/core/ui/typography/Title';

import './ApiTable.scss';

interface IApiTableProps {
    entityInfo: IEntityInfo,
}

export default function ApiTable(props: IApiTableProps) {
    const bem = useBem('ApiTable');

    if (_isEmpty(props.entityInfo?.properties)) {
        return null;
    }

    return (
        <div className={bem.block()}>
            <Title content='Component props' />
            <Grid
                listId='apiTable'
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
