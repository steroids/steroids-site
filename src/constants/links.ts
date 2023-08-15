import {githubLink} from 'data/indexPageData';
import {ROUTE_DOCS} from './routes';

export const HEADER_LINKS = [
    {
        toRoute: ROUTE_DOCS,
        label: __('Документация'),
    },
    {
        toRoute: ROUTE_DOCS,
        label: __('Набор статей'),
    },
    {
        url: githubLink,
        target: 'blank',
        label: __('GIT'),
    },
];
