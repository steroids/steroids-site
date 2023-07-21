/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import {DropDownField} from '@steroidsjs/core/ui/form';
import DropDownView from './DropDownView';
import './CustomDropDown.scss';

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

export default function CustomDropDown() {
    const bem = useBem('CustomDropDown');

    return (
        <DropDownField
            view={DropDownView}
            className={bem.block()}
            items={languageItems}
            selectFirst
            placeholder={languageItems[FIRST_INDEX].label}
            size="sm"
        />
    );
}
