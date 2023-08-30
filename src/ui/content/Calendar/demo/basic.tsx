import * as React from 'react';
import Calendar from '@steroidsjs/core/ui/content/Calendar';

import './calendar-demo.scss';

/**
 * Basic
 * @order 1
 * @col 5
 */

export default () => (
    <>
        <Calendar
            className="calendar-demo"
            value='2021-10-15'
        />
    </>
);
