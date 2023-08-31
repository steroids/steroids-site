/* eslint-disable no-multi-str */
import React from 'react';
import {Card} from '@steroidsjs/core/ui/content';
import {ICardProps} from '@steroidsjs/core/ui/content/Card/Card';
import {Button, CheckboxField, DateField, Form, InputField, MaskField, PasswordField} from '@steroidsjs/core/ui/form';
import {IFormProps} from '@steroidsjs/core/ui/form/Form/Form';
import Grid from '@steroidsjs/core/ui/list/Grid/Grid';
import {IPropControl} from 'types/IPropControl';
import {MASK_PRESETS} from '@steroidsjs/core/ui/form/InputField/InputField';

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
        enabled: true,
        propPath: 'leadIcon',
    },
    {
        id: 2,
        label: __('Отобразить placeholder'),
        enabled: true,
        propPath: 'placeholder',
    },
    {
        id: 3,
        label: __('Отобразить label'),
        enabled: true,
        propPath: 'label',
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
        propPath: 'outline',
        enabled: false,
    },
    {
        id: 3,
        label: __('Включить состояние загрузки'),
        propPath: 'isLoading',
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
        enabled: true,
        propPath: 'header',
    },
    {
        id: 2,
        label: __('Добавить изображение'),
        enabled: false,
        propPath: 'cover',
    },
];

const defaultFormProps: IFormProps = {
    fields: [
        {
            attribute: 'name',
            component: InputField,
            required: true,
            label: __('Имя'),
        },
    ],
    submitLabel: __('Отправить'),
    onSubmit: () => {
        alert(__('Ваши данные успешно отправлены!'));
    },
};

const formControls: IPropControl[] = [
    {
        id: 5,
        label: __('Отобразить поле пароля'),
        enabled: true,
        addition: {
            toAddition: {
                attribute: 'password',
                component: () => (
                    <PasswordField
                        required
                        showSecurityBar
                        showSecurityIcon={false}
                        attribute='password'
                        label={__('Пароль')}
                    />
                ),
            },
            propPath: 'fields',
        },
    },
    {
        id: 1,
        label: __('Отобразить поле телефона'),
        enabled: true,
        addition: {
            toAddition: {
                attribute: 'tel',
                component: () => (
                    <MaskField
                        required
                        attribute='tel'
                        maskOptions={MASK_PRESETS.phone}
                        label={__('Телефон')}
                    />
                ),
            },
            propPath: 'fields',
        },
    },
    {
        id: 2,
        label: __('Отобразить поле дня рождения'),
        enabled: true,
        addition: {
            toAddition: {
                attribute: 'birth',
                component: () => (
                    <DateField
                        required
                        attribute='birth'
                        position='bottom'
                        label={__('Дата рождения')}
                    />
                ),
            },
            propPath: 'fields',
        },
    },
    {
        id: 4,
        label: __('Отобразить согласие'),
        enabled: true,
        addition: {
            toAddition: {
                attribute: 'agree',
                component: () => (
                    <CheckboxField
                        required
                        attribute='agree'
                        label={__('Согласие на обработку данных')}
                    />
                ),
            },
            propPath: 'fields',
        },
    },
    {
        id: 3,
        label: __('Отобразить кнопку отправить'),
        propPath: 'submitLabel',
        enabled: true,
    },
];

const defaultGridProps = {
    columns: [
        {
            label: 'Name',
            attribute: 'name',
        },
        {
            label: 'Second name',
            attribute: 'secondName',
        },
    ],
    listId: 'GridInteractiveSection',
    items: [
        {
            id: 1,
            name: 'Ivan',
            secondName: 'Ivanov',
            work: 'development',
            percentage: 50,
            health: 25,
            hunger: 35,
            damage: 45,
            mana: 55,
            pic: '/images/image.webp',

        },
        {
            id: 2,
            name: 'Petr',
            secondName: 'Petrov',
            work: 'manager',
            percentage: 30,
            health: 25,
            hunger: 35,
            damage: 45,
            mana: 55,
            pic: '/images/image.webp',

        },
    ],
};

const gridControls: IPropControl[] = [
    {
        id: 1,
        label: __('Отобразить круговые диаграммы'),
        enabled: false,
        addition: {
            toAddition: {
                label: 'Circle',
                valueView: 'DiagramColumnView',
                diagram: {
                    type: 'circle',
                    items: [
                        {
                            color: 'success',
                            percentageAttribute: 'health',
                        },
                        {
                            color: 'warning',
                            percentageAttribute: 'hunger',
                        },
                        {
                            color: 'danger',
                            percentageAttribute: 'damage',
                        },
                        {
                            color: 'secondary',
                            percentageAttribute: 'mana',
                        },
                    ],
                },
            },
            propPath: 'columns',
        },
    },
    {
        id: 2,
        label: __('Отобразить горизонтальные диаграммы'),
        enabled: false,
        addition: {
            toAddition: {
                label: 'Horizontal',
                valueView: 'DiagramColumnView',
                diagram: {
                    type: 'horizontal',
                    items: [
                        {
                            color: 'secondary',
                            percentageAttribute: 'percentage',
                        },
                    ],
                },
            },
            propPath: 'columns',
        },
    },
    {
        id: 3,
        label: __('Отобразить колонку с изображением'),
        enabled: false,
        addition: {
            toAddition: {
                label: 'Just picture',
                picture: {
                    attribute: 'pic',
                },
                valueView: 'ContentColumnView',
            },
            propPath: 'columns',
        },
    },
];

export const components: Record<string, {
    component: any,
    props: Record<string, any>,
    controls?: IPropControl[],
    hasSizeControl: boolean,
    hasColorControl: boolean,
    isHiddenOnMobile?: boolean,
    isHiddenOnDesktop?: boolean,
}> = {
    input: {
        component: InputField,
        props: defaultInputProps,
        controls: inputControls,
        hasSizeControl: true,
        hasColorControl: false,
        isHiddenOnDesktop: false,
    },
    button: {
        component: Button,
        props: defaultButtonProps,
        controls: buttonControls,
        hasSizeControl: true,
        hasColorControl: true,
        isHiddenOnDesktop: false,
    },
    card: {
        component: Card,
        props: defaultCardProps,
        controls: cardControls,
        hasColorControl: false,
        hasSizeControl: false,
        isHiddenOnMobile: true,
        isHiddenOnDesktop: false,
    },
    form: {
        component: Form,
        props: defaultFormProps,
        controls: formControls,
        hasColorControl: false,
        hasSizeControl: false,
        isHiddenOnDesktop: false,
    },
    grid: {
        component: Grid,
        props: defaultGridProps,
        controls: gridControls,
        hasColorControl: false,
        hasSizeControl: true,
        isHiddenOnDesktop: true,
    },
};
