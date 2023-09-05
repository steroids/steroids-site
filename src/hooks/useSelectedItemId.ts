import {useSelector} from '@steroidsjs/core/hooks';
import {getRouteParams} from '@steroidsjs/core/reducers/router';
import React from 'react';

const CHAR_MINUS = '-';
const ITEM_SPLITTED_ID_INDEX = 1;
const ITEM_DEFAULT_ID_INDEX = 0;

type SelectedItemIdParamsType = {
    path: string;

    [key: string]: any;
}

export const useSelectedItemId = () => {
    const params = useSelector(state => getRouteParams(state));

    const selectedId = React.useMemo(
        () => {
            if (!params.path) {
                return null;
            }

            const splittedPath = params.path?.split(CHAR_MINUS);

            if (splittedPath?.length > 1) {
                return splittedPath[ITEM_SPLITTED_ID_INDEX].toLowerCase();
            }

            return splittedPath[ITEM_DEFAULT_ID_INDEX];
        },
        [params],
    );

    return selectedId;
};
