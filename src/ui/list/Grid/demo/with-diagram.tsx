import * as React from 'react';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';

const items = [
    {
        id: 1,
        name: 'John',
        color: 'secondary',
        healthColor: 'success',
        hungerColor: 'warning',
        damageColor: 'danger',
        manaColor: 'secondary',
        percentage: 50,
        health: 25,
        hunger: 35,
        damage: 45,
        mana: 55,
    },
    {
        id: 2,
        name: 'Julia',
        color: 'danger',
        healthColor: 'success',
        hungerColor: 'warning',
        damageColor: 'danger',
        manaColor: 'secondary',
        percentage: 30,
        health: 25,
        hunger: 35,
        damage: 45,
        mana: 55,
    },
];

export const columns = [
    {
        label: 'Horizontal',
        valueView: 'DiagramColumnView',
        diagrams: {
            type: 'horizontal',
            items: [
                {
                    colorAttribute: 'color',
                    percentageAttribute: 'percentage',
                },
            ],
        },
    },
    {
        label: 'Vertical',
        valueView: 'DiagramColumnView',
        diagrams: {
            type: 'vertical',
            items: [
                {
                    colorAttribute: 'healthColor',
                    percentageAttribute: 'health',
                },
                {
                    colorAttribute: 'hungerColor',
                    percentageAttribute: 'hunger',
                },
                {
                    colorAttribute: 'damageColor',
                    percentageAttribute: 'damage',
                },
                {
                    colorAttribute: 'manaColor',
                    percentageAttribute: 'mana',
                },
            ],
        },
    },
    {
        label: 'Circle',
        valueView: 'DiagramColumnView',
        diagrams: {
            type: 'circle',
            items: [
                {
                    colorAttribute: 'healthColor',
                    percentageAttribute: 'health',
                },
                {
                    colorAttribute: 'hungerColor',
                    percentageAttribute: 'hunger',
                },
                {
                    colorAttribute: 'damageColor',
                    percentageAttribute: 'damage',
                },
                {
                    colorAttribute: 'manaColor',
                    percentageAttribute: 'mana',
                },
            ],
        },
    },
    {
        label: 'Circle with subtitle',
        valueView: 'DiagramColumnView',
        diagrams: {
            type: 'circle',
            items: [
                {
                    colorAttribute: 'healthColor',
                    percentageAttribute: 'health',
                },
                {
                    colorAttribute: 'hungerColor',
                    percentageAttribute: 'hunger',
                },
                {
                    colorAttribute: 'damageColor',
                    percentageAttribute: 'damage',
                },
                {
                    colorAttribute: 'manaColor',
                    percentageAttribute: 'mana',
                },
            ],
        },
        subtitleAttribute: 'name',
    },
];

/**
 * Cell with diagrams
 * @order 1
 * @col 8
 */
export default () => (
    <div style={{width: 1000}}>
        <Grid
            listId='GridDiagramDemo'
            items={items}
            columns={columns}
        />
    </div>
);
