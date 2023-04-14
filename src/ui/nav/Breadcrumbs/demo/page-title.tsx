import * as React from 'react';
import Breadcrumbs from '@steroidsjs/core/ui/nav/Breadcrumbs';

/**
 * Изменяем заголовок последней в списке страницы.
 * @order 2
 * @col 6
 */
export default () => (
    <>
        <Breadcrumbs
            pageId='docs'
            pageTitle='Custom text'
        />
    </>
);
