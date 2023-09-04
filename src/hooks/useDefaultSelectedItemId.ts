import React from 'react';

const CHAR_MINUS = '-';
const ITEM_SPLITTED_ID_INDEX = 1;
const ITEM_DEFAULT_ID_INDEX = 0;

type DefaultSelectedItemIdParamsType = {
    path: string;

    [key: string]: any;
}

export const useDefaultSelectedItemId = (params: DefaultSelectedItemIdParamsType) => {
    const defaultSelectedId = React.useMemo(
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

    return defaultSelectedId;
};
