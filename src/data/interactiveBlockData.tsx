/* eslint-disable no-multi-str */
import {Card} from '@steroidsjs/core/ui/content';
import {ICardProps} from '@steroidsjs/core/ui/content/Card/Card';
import {Button, CheckboxField, InputField} from '@steroidsjs/core/ui/form';
import {ICheckboxFieldProps} from '@steroidsjs/core/ui/form/CheckboxField/CheckboxField';
import {IPropControl} from 'types/IPropControl';

export const sizes = [
    {
        label: 'Small',
        id: 'sm',
    },
    {
        label: 'Medium',
        id: 'md',
    },
    {
        label: 'Large',
        id: 'lg',
    },
];

export const buttonColors = [
    {
        label: 'Primary',
        id: 'primary',
    },
    {
        label: 'Warning',
        id: 'warning',
    },
    {
        label: 'Danger',
        id: 'danger',
    },
];

const defaultInputProps = {
    label: __('Логин'),
    leadIcon: 'user',
    placeholder: 'Placeholder',
};

const inputControls: IPropControl[] = [
    {
        id: 1,
        label: __('Отобразить иконку'),
        enabled: false,
        propName: 'leadIcon',
    },
    {
        id: 2,
        label: __('Отобразить placeholder'),
        enabled: false,
        propName: 'placeholder',
    },
    {
        id: 3,
        label: __('Отобразить label'),
        enabled: false,
        propName: 'label',
    },
];

const defaultButtonProps = {
    label: __('Отправить'),
    outline: true,
    isLoading: true,
};

const buttonControls: IPropControl[] = [
    {
        id: 1,
        label: __('Включить стиль outline'),
        propName: 'outline',
        enabled: false,
    },
    {
        id: 3,
        label: __('Включить состояние загрузки'),
        propName: 'isLoading',
        enabled: false,
    },
];

const defaultCardProps: ICardProps = {
    header: {
        avatar: {
            src: 'https://i.ibb.co/pxSYhX0/image-3.png',
            status: true,
        },
        head: 'Header',
        subhead: 'Subhead',
    },
    cover: 'https://i.ibb.co/1rTqmJD/image-1.jpg',
    title: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
};

const cardControls: IPropControl[] = [
    {
        id: 1,
        label: __('Отобразить header'),
        enabled: false,
        propName: 'header',
    },
    {
        id: 2,
        label: __('Добавить изображение'),
        enabled: false,
        propName: 'cover',
    },
];

const defaultCheckboxProps: ICheckboxFieldProps = {
    label: __('Согласен на обработку данных'),
    disabled: true,
    errors: [__('Произошла ошибка')],
};

const checkboxControls: IPropControl[] = [
    {
        id: 1,
        enabled: false,
        label: __('Включить состояние disabled'),
        propName: 'disabled',
    },
    {
        id: 2,
        enabled: false,
        label: __('Отобразить ошибку'),
        propName: 'errors',
    },
];

export const components: Record<string, {
    component: any,
    props: Record<string, any>,
    controls?: IPropControl[],
    hasSizeControl: boolean,
    hasColorControl: boolean,
    isHiddenOnMobile?: boolean,
}> = {
    input: {
        component: InputField,
        props: defaultInputProps,
        controls: inputControls,
        hasSizeControl: true,
        hasColorControl: false,
    },
    button: {
        component: Button,
        props: defaultButtonProps,
        controls: buttonControls,
        hasSizeControl: true,
        hasColorControl: true,
    },
    card: {
        component: Card,
        props: defaultCardProps,
        controls: cardControls,
        hasColorControl: false,
        hasSizeControl: false,
        isHiddenOnMobile: true,
    },
    checkbox: {
        component: CheckboxField,
        props: defaultCheckboxProps,
        controls: checkboxControls,
        hasColorControl: false,
        hasSizeControl: true,
    },
};
