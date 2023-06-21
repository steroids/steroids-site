import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {useTheme, LIGHT_THEME} from '@steroidsjs/core/hooks/useTheme';
import {Button} from '@steroidsjs/core/ui/form';

import './ThemesButton.scss';

export default function ThemesButton() {
    const bem = useBem('ThemesButton');
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={bem.block()}
            label={theme === LIGHT_THEME ? __('Темная тема') : __('Светлая тема')}
            onClick={toggleTheme}
            outline
        />
    );
}
