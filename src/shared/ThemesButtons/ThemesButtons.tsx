import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import useTheme from '@steroidsjs/core/hooks/useTheme';
import ButtonGroup from '@steroidsjs/core/ui/nav/ButtonGroup';
import Themes from 'enums/Themes';
import CustomButtonGroupView from './views/CustomButtonGroupView';

import './ThemesButtons.scss';

export interface IThemesButtonsProps {
    className?: string;
}

function ThemesButtons(props: IThemesButtonsProps) {
    const bem = useBem('ThemesButtons');
    const {theme, setTheme} = useTheme();

    return (
        <ButtonGroup
            className={bem(
                bem.block(),
                props.className,
            )}
            view={CustomButtonGroupView}
            onClick={(selectedTheme: string) => setTheme(selectedTheme)}
            activeButton={theme}
            buttonProps={{
                color: 'basic',
            }}
            items={Themes}
        />
    );
}

export default memo(ThemesButtons);
