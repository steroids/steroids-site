import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content/Accordion';

/**
 * Accordion types
 */

export default () => (
    <div style={{minHeight: '255px'}}>
        <Accordion
            activeKey={2}
            hasOneOpenItem
        >
            <AccordionItem title='Top'>Top content</AccordionItem>
            <AccordionItem title='Middle'>Middle content</AccordionItem>
            <AccordionItem title='Bottom'>Bottom content</AccordionItem>
        </Accordion>
    </div>
);
