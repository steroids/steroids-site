import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';

const items = [
    {
        id: 1,
        name: 'John',
        percentage: 50,
        health: 25,
        hunger: 35,
        damage: 45,
        mana: 55,
    },
    {
        id: 2,
        name: 'Julia',
        percentage: 30,
        health: 25,
        hunger: 35,
        damage: 45,
        mana: 55,
    },
];

export const columns = [
    /* {
        label: 'Vertical',
        valueView: 'DiagramColumnView',
        diagram: {
            type: 'vertical',
            items: [
                {
                    color: 'success',
                    percentageAttribute: 'health',
                },
                {
                    color: 'warning',
                    percentageAttribute: 'hunger',
                },
                {
                    color: 'danger',
                    percentageAttribute: 'damage',
                },
                {
                    color: 'secondary',
                    percentageAttribute: 'mana',
                },
            ],
        },
    }, */
    {
        label: 'Circle',
        valueView: 'DiagramColumnView',
        diagram: {
            type: 'circle',
            items: [
                {
                    color: 'success',
                    percentageAttribute: 'health',
                },
                {
                    color: 'warning',
                    percentageAttribute: 'hunger',
                },
                {
                    color: 'danger',
                    percentageAttribute: 'damage',
                },
                {
                    color: 'secondary',
                    percentageAttribute: 'mana',
                },
            ],
        },
    },
    {
        label: 'Horizontal',
        valueView: 'DiagramColumnView',
        diagram: {
            type: 'horizontal',
            items: [
                {
                    color: 'secondary',
                    percentageAttribute: 'percentage',
                },
            ],
        },
    },
    {
        label: 'Circle with subtitle',
        valueView: 'DiagramColumnView',
        diagram: {
            type: 'circle',
            items: [
                {
                    color: 'success',
                    percentageAttribute: 'health',
                },
                {
                    color: 'warning',
                    percentageAttribute: 'hunger',
                },
                {
                    color: 'danger',
                    percentageAttribute: 'damage',
                },
                {
                    color: 'secondary',
                    percentageAttribute: 'mana',
                },
            ],
        },
        subtitleAttribute: 'name',
    },
] as any;

/**
 * Cell with diagrams
 * @order 1
 * @col 8
 */
export default () => (
    <div>
        <Grid
            listId='GridDiagramDemo'
            items={items}
            columns={columns}
        />
    </div>
);
