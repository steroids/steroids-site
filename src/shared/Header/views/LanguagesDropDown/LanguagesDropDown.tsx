/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import {DropDownField} from '@steroidsjs/core/ui/form';
import LanguagesDropDownView from './views/LanguagesDropDownView';

import './LanguagesDropDown.scss';

const FIRST_INDEX = 0;

const languageItems = [
    {
        id: 1,
        label: __('Ru'),
    },
    {
        id: 2,
        label: __('En'),
    },
];

export default function LanguagesDropDown() {
    const bem = useBem('LanguagesDropDown');

    return (
        <DropDownField
            view={LanguagesDropDownView}
            className={bem.block()}
            items={languageItems}
            selectFirst
            placeholder={languageItems[FIRST_INDEX].label}
            size="sm"
        />
    );
}
