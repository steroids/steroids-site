import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import _isEmpty from 'lodash-es/isEmpty';
import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import ApiTable from 'routes/DocsPage/views/ApiTable';
import {Title} from '@steroidsjs/core/ui/typography';
import {getNestedInterfaces} from 'helpers/apiTable';
import {IEntityInfo} from 'types/IEntityInfo';

import './ComponentPropsInfo.scss';

interface IComponentPropsInfoProps {
    componentInfo: IEntityInfo;
    className?: string;
}

const API_TABLE_ID = 'apiTable';

function ComponentPropsInfo(props: IComponentPropsInfoProps) {
    const bem = useBem('ComponentPropsInfo');

    const nestedInterfaces = React.useMemo(
        () => getNestedInterfaces(props.componentInfo, autoDocs.interfaces),
        [props.componentInfo],
    );

    return (
        <div className={bem(
            bem.block(),
            props.className,
        )}
        >
            <ApiTable
                className={bem.element('table')}
                entityInfo={props.componentInfo}
                listId={API_TABLE_ID}
            />
            {!_isEmpty(nestedInterfaces) && (
                <div className={bem.element('nested-interfaces')}>
                    <Title content='Props interfaces' />
                    <div className={bem.element('nester-wrapper')}>
                        {nestedInterfaces.map((nestedInterface, nestedInterfaceIndex) => (
                            <ApiTable
                                key={nestedInterfaceIndex}
                                entityInfo={nestedInterface}
                                titleProps={{
                                    content: nestedInterface.name,
                                    type: 'h3',
                                }}
                                listId={API_TABLE_ID + nestedInterfaceIndex}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>

    );
}

export default memo(ComponentPropsInfo);
