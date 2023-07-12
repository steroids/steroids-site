import {Card} from '@steroidsjs/core/ui/content';
import {ICardProps} from '@steroidsjs/core/ui/content/Card/Card';
import {Button, CheckboxField, InputField} from '@steroidsjs/core/ui/form';
import {ICheckboxFieldProps} from '@steroidsjs/core/ui/form/CheckboxField/CheckboxField';
import {IInputFieldProps} from '@steroidsjs/core/ui/form/InputField/InputField';
import {IPropControl} from 'types/IPropControl';

export const DEFAULT_SIZE = 'sm';

export const SIZES = [
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

export const INPUT_DEFAULT_PROPS = {
    label: __('Логин'),
    leadIcon: 'user',
    placeholder: 'Placeholder',
};

export const INPUT_CONTROLS: IPropControl<IInputFieldProps>[] = [
    {
        id: 1,
        label: 'Тест',
        enabled: true,
        params: null,
    },
    {
        id: 2,
        label: 'Тест',
        enabled: true,
        params: null,
    },
    {
        id: 3,
        label: 'Тест',
        enabled: true,
        params: null,
    },
    {
        id: 4,
        label: 'Тест',
        enabled: true,
        params: null,
    },
];

export const BUTTON_DEFAULT_PROPS = {
    label: __('Отправить'),
};

export const CARD_DEFAULT_PROPS: ICardProps = {
    header: {
        avatar: {
            src: 'https://i.ibb.co/T4j2NMQ/20230325210515-1.jpg',
            status: true,
        },
        head: 'Header',
        subhead: 'Subhead',
        menu: {
            dropDownProps: {
                position: 'bottom',
                closeMode: 'click-any',
            },
            items: [
                {label: 'Вырезать', icon: 'cut', onClick: () => { }},
                {label: 'Копировать', icon: 'copy', hasBorder: true, onClick: () => { }},
                {label: 'Показать историю изменений', hasBorder: true, onClick: () => { }},
                {label: 'Редактировать', icon: 'edit', onClick: () => { }},
                {label: 'Удалить', icon: 'trash', onClick: () => { }},
            ],
            icon: 'menu_dots',
        },
    },
    cover: 'https://i.ibb.co/1rTqmJD/image-1.jpg',
    title: 'Card title',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
};

export const CHECKBOX_DEFAULT_PROPS: ICheckboxFieldProps = {
    label: __('Включить настроение'),
};

export const COMPONENTS: Record<string, {
    component: any,
    props: Record<string, any>,
    controls?: IPropControl<any>[],
}> = {
    Input: {
        component: InputField,
        props: INPUT_DEFAULT_PROPS,
        controls: INPUT_CONTROLS,
    },
    Button: {
        component: Button,
        props: BUTTON_DEFAULT_PROPS,
    },
    Card: {
        component: Card,
        props: CARD_DEFAULT_PROPS,
    },
    Checkbox: {
        component: CheckboxField,
        props: CHECKBOX_DEFAULT_PROPS,
    },
};
