import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content/Accordion';

/**
 * Accordion types
 */

export default () => (
    <div style={{minHeight: '255px'}}>
        <Accordion activeKey={2}>
            <AccordionItem
                title='Top'
                position="top"
            >
                Top content
            </AccordionItem>
            <AccordionItem
                title='Middle'
                position="middle"
            >
                Middle content
            </AccordionItem>
            <AccordionItem
                title='Bottom'
                position="bottom"
            >
                Botoom content
            </AccordionItem>
        </Accordion>
    </div>
);
