/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam} from '@steroidsjs/core/reducers/router';
import {PATH_ROUTE_PARAM} from 'constants/routeParams';
import axios from 'axios';

const PATH_TO_DOCS = '../../../docs/';

export const useDocsMarkdown = () => {
    const currentPath = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const [markdownContent, setMarkdownContent] = React.useState(null);

    const fetchMarkDown = async () => {
        try {
            const response = await axios.get(PATH_TO_DOCS + `${currentPath}.md`);
            setMarkdownContent(response.data);
        } catch (error) {
            console.error('Error loading Markdown file:', error);
        }
    };

    React.useEffect(() => {
        fetchMarkDown();
    });

    return {
        currentPath,
        markdownContent,
    };
};
