/* eslint-disable import/no-extraneous-dependencies */
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import React from 'react';
import {useComponents, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';

const getDocsContentByLanguage = (docsName: string, language: string) => {
    const docsContext = {
        en: require.context('raw-loader!@docsEn', true, /\.md$/),
        ru: require.context('raw-loader!@docsRu', true, /\.md$/),
    };

    const docsKey = `./${docsName}.md`;
    const currentDocsContext = docsContext[language];

    return currentDocsContext.keys().includes(docsKey)
        ? currentDocsContext(docsKey).default
        : null;
};

export const useDocsMarkdown = () => {
    const currentPath = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const [docsContent, setDocsContent] = React.useState(null);
    const {locale} = useComponents();

    React.useEffect(() => {
        setDocsContent(getDocsContentByLanguage(
            currentPath,
            locale.language,
        ));
    }, [currentPath, locale.language]);

    return {
        docsContent,
    };
};
