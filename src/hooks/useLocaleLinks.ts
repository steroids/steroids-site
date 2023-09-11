import {LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import _isArray from 'lodash-es/isArray';
import _every from 'lodash-es/every';
import {useComponents} from '@steroidsjs/core/hooks';
import {INavItem} from '@steroidsjs/core/ui/nav/Nav/Nav';
import React from 'react';

export const useLocaleLinks = (links: INavItem[] | Array<INavItem[]>) => {
    const {locale} = useComponents();

    const getLocaleLink = React.useCallback((unLocaleLink: INavItem): INavItem => {
        if (!unLocaleLink.toRouteParams) {
            return unLocaleLink;
        }

        return {
            ...unLocaleLink,
            toRouteParams: {
                [LANGUAGE_ROUTE_PARAM]: locale.language,
                ...unLocaleLink.toRouteParams,
            },
        };
    }, [locale.language]);

    const getLocaleLinks = React.useCallback((unLocaleLinks: INavItem[] | Array<INavItem[]>): INavItem[] | Array<INavItem[]> => {
        if (_isArray(unLocaleLinks) && _every(unLocaleLinks, _isArray)) {
            return unLocaleLinks.map((arrayOfLinks) => getLocaleLinks(arrayOfLinks));
        }

        return unLocaleLinks.map(getLocaleLink);
    }, [getLocaleLink]);

    const localeLinks = React.useMemo(() => getLocaleLinks(links), [getLocaleLinks, links]);

    return localeLinks;
};
