import * as React from 'react';
import {Collapse, CollapseItem} from '@steroidsjs/core/ui/content';

/**
 * Accordion mode
 * @order 2
 * @col 6
 */

export default () => (
    <div style={{minHeight: '255px'}}>
        <Collapse isAccordion activeKey={2}>
            <CollapseItem title='Accordion'>1</CollapseItem>
            <CollapseItem title='Accordion'>2</CollapseItem>
            <CollapseItem title='Accordion'>3</CollapseItem>
        </Collapse>
    </div>
);
