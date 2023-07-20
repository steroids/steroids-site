import {Card} from '@steroidsjs/core/ui/content';
import {ICardProps} from '@steroidsjs/core/ui/content/Card/Card';
import {Button, CheckboxField, InputField} from '@steroidsjs/core/ui/form';
import {ICheckboxFieldProps} from '@steroidsjs/core/ui/form/CheckboxField/CheckboxField';
import {IPropControl} from 'types/IPropControl';

export const voidFunction = () => { };

export const DEFAULT_SIZE = 'sm';
export const DEFAULT_COMPONENT_NAME = 'Input';

export const COMPONENTS_LIST = [
    {
        id: 'Input',
        label: 'Input',
    },
    {
        id: 'Button',
        label: 'Button',
    },
    {
        id: 'Card',
        label: 'Card',
    },
    {
        id: 'Checkbox',
        label: 'Checkbox',
    },
];

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

export const INPUT_CONTROLS: IPropControl[] = [
    {
        id: 1,
        label: __('Отображение иконки'),
        enabled: false,
        propName: 'leadIcon',
    },
    {
        id: 2,
        label: __('Заполнитель'),
        enabled: false,
        propName: 'placeholder',
    },
    {
        id: 3,
        label: __('Заголовок'),
        enabled: false,
        propName: 'label',
    },
];

export const BUTTON_DEFAULT_PROPS = {
    label: __('Отправить'),
    outline: true,
    color: 'warning',
    isLoading: true,
};

export const BUTTON_CONTROLS: IPropControl[] = [
    {
        id: 1,
        label: __('Сменить стиль'),
        propName: 'outline',
        enabled: false,
    },
    {
        id: 2,
        label: __('Сменить цвет'),
        propName: 'color',
        enabled: false,
    },
    {
        id: 3,
        label: __('Состояние загрузки'),
        propName: 'isLoading',
        enabled: false,
    },
];

export const CARD_DEFAULT_PROPS: ICardProps = {
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

export const CARD_CONTROLS: IPropControl[] = [
    {
        id: 1,
        label: __('Отобразить шапку'),
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

export const CHECKBOX_DEFAULT_PROPS: ICheckboxFieldProps = {
    label: __('Включить настроение'),
    disabled: true,
    errors: [__('Произошла ошибка')],
};

export const CHECKBOX_CONTROLS: IPropControl[] = [
    {
        id: 1,
        enabled: false,
        label: __('Состояние disabled'),
        propName: 'disabled',
    },
    {
        id: 2,
        enabled: false,
        label: __('Отобразить ошибку'),
        propName: 'errors',
    },
];

export const COMPONENTS: Record<string, {
    component: any,
    props: Record<string, any>,
    controls?: IPropControl[],
}> = {
    Input: {
        component: InputField,
        props: INPUT_DEFAULT_PROPS,
        controls: INPUT_CONTROLS,
    },
    Button: {
        component: Button,
        props: BUTTON_DEFAULT_PROPS,
        controls: BUTTON_CONTROLS,
    },
    Card: {
        component: Card,
        props: CARD_DEFAULT_PROPS,
        controls: CARD_CONTROLS,
    },
    Checkbox: {
        component: CheckboxField,
        props: CHECKBOX_DEFAULT_PROPS,
        controls: CHECKBOX_CONTROLS,
    },
};
