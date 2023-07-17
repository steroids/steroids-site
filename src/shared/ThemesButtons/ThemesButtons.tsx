import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {DARK_THEME, useTheme} from '@steroidsjs/core/hooks/useTheme';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import ButtonGroupView from './views/ButtonGroupView';
import './ThemesButtons.scss';

export interface IThemesButtonsProps {
    className?: string;
}

export default function ThemesButtons(props: IThemesButtonsProps) {
    const bem = useBem('ThemesButtons');
    const {theme, toggleTheme} = useTheme();

    const onClickTheme = React.useCallback((selectedTheme: string) => {
        if (selectedTheme !== theme) {
            toggleTheme();
        }
    }, [theme, toggleTheme]);

    return (
        <ButtonGroup
            className={bem(
                bem.block(),
                props.className,
            )}
            view={ButtonGroupView}
            onClick={onClickTheme}
            activeButton={theme}
            buttonProps={{
                color: 'basic',
            }}
            items={['light', 'dark']}
        />
    );
}
