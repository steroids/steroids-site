import * as React from 'react';
import Breadcrumbs from '@steroidsjs/core/ui/nav/Breadcrumbs';

/**
 * Замена первого item иконкой
 * @order 1
 * @col 6
 */
export default () => (
    <>
        <Breadcrumbs
            items={[
                {id: 'root', title: 'Home'},
                {id: 'react', title: 'Frontend React'},
                {id: 'ui', title: 'Ui'},
                {id: 'Breadcrumbs', title: 'Breadcrumbs'},
            ]}
            showIcon
            customIcon='user'
        />
    </>
);
