import * as React from 'react';
import {Accordion, AccordionItem} from '@steroidsjs/core/ui/content';

/**
 * Anonymous function every time you change state of Accordion
 * @order 8
 * @col 6
 */

export default () => {
    const [touches, setTouches] = React.useState<number>(-1);
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '15px', minHeight: '225px'}}>
            <Accordion
                icon='add'
                onChange={() => setTouches(prevTouches => prevTouches + 1)}
            >
                <AccordionItem>Custom icon</AccordionItem>
                <AccordionItem>Custom icon</AccordionItem>
                <AccordionItem>Custom icon</AccordionItem>
            </Accordion>
            <div>
                <p>
                    {`You touched collapse ${touches} time`}
                </p>
            </div>
        </div>
    );
};
