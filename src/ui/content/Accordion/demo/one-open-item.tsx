import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content/Accordion';

/**
 * Accordion types
 */

export default () => (
    <div style={{minHeight: '255px'}}>
        <Accordion activeKey={2} hasOneOpenItem>
            <AccordionItem title='Top' position="top" theme="dark">Top content</AccordionItem>
            <AccordionItem title='Middle' position="middle" theme="intermediate">Middle content</AccordionItem>
            <AccordionItem title='Bottom' theme="light" position="bottom">Botoom content</AccordionItem>
        </Accordion>
    </div>
);
