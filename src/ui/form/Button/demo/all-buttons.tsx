import React from 'react';
import Button from '@steroidsjs/core/ui/form/Button/Button';

const buttonColors = {
    basic: 'Basic',
    primary: 'Primary',
    secondary: 'Secondary',
    success: 'Success',
    danger: 'Danger',
    warning: 'Warning',
    info: 'Info',
};

const buttonsProperties = [
    {
        size: 'sm',
    },
    {
        disabled: true,
        size: 'sm',

    },
    {
        isLoading: true,
        // disabled: true,
        size: 'sm',

    },
    {
        isLoading: true,
        outline: true,
        size: 'sm',

    },
    {
        outline: true,
        size: 'sm',

    },
    {
        size: 'md',
    },
    {
        size: 'lg',
        fontThickness: 'bold',
    },
];

/**
 * Кнопка растянутая по ширине родительского блока.
 * @order 4
 * @col 4
 */
export default () => (
    <>
        <div style={{display: 'flex', gridGap: '30px', flexDirection: 'column', flexWrap: 'wrap'}}>
            {Object.keys(buttonColors).map((color, colorsIndex) => (
                <div key={colorsIndex} style={{display: 'flex', columnGap: '20px'}}>
                    {buttonsProperties.map((properties, index) => (
                        <Button
                            {...properties}
                            color={color}
                            key={index}
                            label={buttonColors[color]}
                        />
                    ))}
                </div>
            ))}
        </div>
    </>
);
