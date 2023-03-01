import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content';

/**
 * Custom icon
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{minHeight: '255px'}}>
        <Accordion icon={{open: 'success', close: 'error'}}>
            <AccordionItem title='Show more'>Some content</AccordionItem>
        </Accordion>
    </div>
);
