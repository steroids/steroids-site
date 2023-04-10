import * as React from 'react';
import Menu from '../../../../../../react/src/ui/content/Menu';
// import Menu from '@steroidsjs/core/ui/content/Menu/Menu'

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
                {label: 'Вырезать', icon: 'user'},
                {label: 'Копировать', icon: 'user'},
                {label: 'Вставить', icon: 'user'},
                {label: 'Специальная вставка', hasBorder: true},
                {label: 'Вставить строку'},
                {label: 'Вставить столбец'},
                {label: 'Вставить ячейки', hasBorder: true},
                {label: 'Редактировать', icon: 'user'},
                {label: 'Сделать основным', icon: 'user'},
                {label: 'Удалить', icon: 'user'},
            ]}
        />
    </>
);
