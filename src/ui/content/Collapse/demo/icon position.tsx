import * as React from 'react';
import {Collapse, CollapseItem} from '@steroidsjs/core/ui/content';

/**
 * Icon position left or right
 * @order 7
 * @col 6
 */

export default () => (
    <>
        <Collapse iconPosition='left' activeKey={2}>
            <CollapseItem>Custom icon</CollapseItem>
            <CollapseItem showIcon={false}>Custom icon</CollapseItem>
            <CollapseItem>Custom icon</CollapseItem>
        </Collapse>
    </>
);
