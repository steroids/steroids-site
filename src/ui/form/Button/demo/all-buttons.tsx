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

const buttonPropsList = [
    {
        size: 'sm',
    },
    {
        disabled: true,
        size: 'sm',
    },
    {
        isLoading: true,
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
    },
];

/**
 * Кнопка растянутая по ширине родительского блока.
 * @order 4
 * @col 4
 */
export default () => (
    <div style={{display: 'flex', gap: '30px', flexDirection: 'column', flexWrap: 'wrap', maxWidth: '790px'}}>
        {Object.keys(buttonColors).map((buttonColor, buttonColorIndex) => (
            <div
                key={buttonColorIndex}
                style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}
            >
                {buttonPropsList.map((buttonPropsItem, buttonPropsIndex) => (
                    <Button
                        style={{width: '160px'}}
                        {...buttonPropsItem}
                        color={buttonColor}
                        key={buttonPropsIndex}
                        label={buttonColors[buttonColor]}
                    />
                ))}
            </div>
        ))}
    </div>
);
