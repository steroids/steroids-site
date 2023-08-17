import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import _upperFirst from 'lodash-es/upperFirst';
import autoDocs from '@steroidsjs/core/docs-autogen-result.json';
import {useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import Title from '@steroidsjs/core/ui/typography/Title';
import Text from '@steroidsjs/core/ui/typography/Text';
import {useScrollToTop} from 'hooks/useScrollToTop';
import ApiTable from '../ApiTable';

import './ComponentInfo.scss';

const API_TABLE_ID = 'apiTable';

export default function ComponentInfo() {
    const bem = useBem('ComponentInfo');
    const routeParam = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const componentInfo = autoDocs.components[`components/${_upperFirst(routeParam)}Component`];

    useScrollToTop(componentInfo);

    if (!routeParam) {
        return null;
    }

    return (
        <div className={bem.block()}>
            <Title content={componentInfo.title || componentInfo.name} />
            <Text content={componentInfo.description} />
            <ApiTable
                entityInfo={componentInfo}
                listId={API_TABLE_ID}
            />
        </div>
    );
}
