/* eslint-disable import/no-extraneous-dependencies */
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import React from 'react';
import {useComponents, useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import axios from 'axios';

const PATH_TO_DOCS = '../../../docs/';

export const useDocsMarkdown = () => {
    const currentPath = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const [markdownContent, setMarkdownContent] = React.useState(null);
    const {locale} = useComponents();

    const fetchMarkDown = React.useCallback(async () => {
        try {
            const response = await axios.get(`${PATH_TO_DOCS}${locale.language}/${currentPath}.md`);
            setMarkdownContent(response.data);
        } catch (error) {
            console.error('Error loading Markdown file:', error);
        }
    }, [currentPath, locale.language]);

    React.useEffect(() => {
        fetchMarkDown();
    }, [fetchMarkDown]);

    return {
        currentPath,
        markdownContent,
    };
};
