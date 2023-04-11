import * as React from 'react';
import Menu from '@steroidsjs/core/ui/content/Menu/Menu'

/**
 * @order 1
 * @col 6
 */

export default () => (
    <>
        <Menu
            closeMode='click-any'
            position='bottom'
            items={[
                {label: 'Вырезать', icon: 'cut'},
                {label: 'Копировать', icon: 'copy'},
                {label: 'Вставить', icon: 'paste'},
                {label: 'Специальная вставка', hasBorder: true},
                {label: 'Показать историю изменений', hasBorder: true},
                {label: 'Вставить строку'},
                {label: 'Вставить столбец'},
                {label: 'Вставить ячейки', hasBorder: true},
                {label: 'Редактировать', icon: 'edit-duotone'},
                {label: 'Сделать основным', icon: 'pin'},
                {label: 'Удалить', icon: 'trash'},
            ]}
        />
    </>
);
