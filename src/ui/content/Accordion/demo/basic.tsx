import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content';

/**
 * Basic
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{minHeight: '255px'}}>
        <Accordion>
            <AccordionItem title='Show more'>1</AccordionItem>
            <AccordionItem title='Show more'>2</AccordionItem>
            <AccordionItem title='Show more'>3</AccordionItem>
        </Accordion>
    </div>
);
