/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import {useBem, useComponents} from '@steroidsjs/core/hooks';
import {DropDownField} from '@steroidsjs/core/ui/form';
import useAppLanguage from 'hooks/useAppLanguage';
import LanguageEnum from 'enums/LanguageEnum';
import LanguagesDropDownView from './views/LanguagesDropDownView';

import './LanguagesDropDown.scss';

interface ILanguagesDropDownProps {
    className?: string;
}

export default function LanguagesDropDown(props: ILanguagesDropDownProps) {
    const bem = useBem('LanguagesDropDown');
    const {setLanguage} = useAppLanguage();
    const {locale} = useComponents();

    return (
        <DropDownField
            view={LanguagesDropDownView}
            className={bem(
                bem.block(),
                props.className,
            )}
            items={LanguageEnum}
            selectedIds={[locale.language]}
            onChange={language => setLanguage(language)}
            size="sm"
        />
    );
}
