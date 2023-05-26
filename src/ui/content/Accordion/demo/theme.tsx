import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content';

/**
 * Темы Accordion
 * @order 1
 * @col 6
 */

export default () => (
    <div style={{minHeight: '255px'}}>
        <Accordion>
            <AccordionItem
                title='Show more'
                theme="light"
            >
                1
            </AccordionItem>
            <AccordionItem
                title='Show more'
                theme="intermediate"
            >
                2
            </AccordionItem>
            <AccordionItem
                title='Show more'
                theme='dark'
            >
                3
            </AccordionItem>
        </Accordion>
    </div>
);
