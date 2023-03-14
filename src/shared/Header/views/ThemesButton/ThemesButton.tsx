import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Button} from '@steroidsjs/core/ui/form';
import Themes from 'enums/themes';

import './ThemesButton.scss';

export default function ThemesButton() {
    const bem = useBem('ThemesButton');
    const [theme, setTheme] = React.useState(Themes.LIGHT);

    const onClick = React.useCallback(() => {
        const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
        setTheme(newTheme);
        document.querySelector('html').setAttribute('data-theme', newTheme);
    }, [theme]);

    return (
        <Button
            className={bem.block()}
            label={Themes.getLabel(theme)}
            onClick={onClick}
            outline
        />
    );
}
