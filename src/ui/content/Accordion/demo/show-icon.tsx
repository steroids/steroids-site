import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content';

/**
 * Show or hide icon
 * @order 6
 * @col 6
 */

export default () => (
    <Accordion activeKey={1}>
        <AccordionItem>Custom icon</AccordionItem>
        <AccordionItem showIcon={false}>Without icon</AccordionItem>
        <AccordionItem>Custom icon</AccordionItem>
    </Accordion>
);
