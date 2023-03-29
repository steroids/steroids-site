/* eslint-disable max-len */
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Title, Text} from '@steroidsjs/core/ui/typography';

import './ChangelogPage.scss';

interface IChangesList {
    title: string,
    items: string[],
}

const GENERAL_CHANGES = [
    'Steroids v3 используют React 18',
    'Сделан новый дизайн компонентов',
    'Добавлены стили для темной темы',
];

const NEW_COMPONENTS = [
    'Badge',
    'Компоненты типографики - Text и Title',
];

const COMPONENTS_CHANGES = [
    'В InputField, TextField добавлена кнопка очищения поля',
    'Компонент Collapse переименован в Accordion, в него добавлена возможность передавать кастомные иконки отдельно для открытого и закрытого состояния AccordionItem',
    'В Card добавлены пропсы - аватар и меню (рендерятся в шапке карточки), массив кнопок и массив ссылок (рендерятся в теле карточки)',
    'В DropDownField добавлены различные типы items: c checkbox, с radio, с иконками, с картинками, с вложенными элементами (стилизованы как accordion)',
];

const OTHER_CHANGES = [
    'Кастомные иконки из файла src/icons/index.ts подключаются в дополнение к встроенным иконкам (до этого подключались вместо встроенных)',
    'Компонент Icon перенес в папку ui/content',
    'Геттеры isChecked, isCheckedAll, getCheckedIds из reducers/list.ts переименованы в isSelected, isSelectedAll, getSelectedIds',
];

const CHANGES_LISTS = [
    {
        title: 'Общие изменения',
        items: GENERAL_CHANGES,
    },
    {
        title: 'Новые компоненты',
        items: NEW_COMPONENTS,
    },
    {
        title: 'Обновления в компонентах',
        items: COMPONENTS_CHANGES,
    },
    {
        title: 'Другие изменения',
        items: OTHER_CHANGES,
    },
];

export default function ChangelogPage() {
    const bem = useBem('ChangelogPage');

    const renderChangesList = React.useCallback((list: IChangesList, listIndex: number) => (
        <React.Fragment key={listIndex}>
            <Title
                type='h3'
                content={__(list.title)}
            />
            <ul className={bem.element('list')}>
                {list.items.map((item, index) => (
                    <li key={index}>
                        <Text content={__(item)} />
                    </li>
                ))}
            </ul>
        </React.Fragment>
    ), [bem]);

    return (
        <div className={bem.block()}>
            <Title
                type='h2'
                content={__('Что нового в Steroids v3')}
            />
            {CHANGES_LISTS.map(renderChangesList)}
        </div>
    );
}
