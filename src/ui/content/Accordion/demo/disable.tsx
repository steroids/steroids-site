import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content';

/**
 * Disable AccordionItem
 * @order 4
 * @col 6
 */

export default () => (
    <div style={{minHeight: '255px'}}>
        <Accordion activeKey={1}>
            <AccordionItem>1</AccordionItem>
            <AccordionItem
                disabled
                title='Disabled'
            >
                2
            </AccordionItem>
            <AccordionItem>3</AccordionItem>
        </Accordion>
    </div>
);
