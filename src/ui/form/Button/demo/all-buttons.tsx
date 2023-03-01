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
        fontThickness: 'bold',
    },
];

/**
 * Кнопка растянутая по ширине родительского блока.
 * @order 4
 * @col 4
 */
export default () => {
    <div style={{display: 'flex', gridGap: '30px', flexDirection: 'column', flexWrap: 'wrap'}}>
        {Object.keys(buttonColors).map((buttonColor, buttonColorIndex) => (
            <div key={buttonColorIndex} style={{display: 'flex', columnGap: '20px'}}>
                {buttonPropsList.map((buttonPropsItem, buttonPropsIndex) => (
                    <Button
                        {...buttonPropsItem}
                        color={buttonColor}
                        key={buttonPropsIndex}
                        label={buttonColors[buttonColor]}
                    />
                ))}
            </div>
        ))}
    </div>;
};
