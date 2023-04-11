import * as React from 'react';
import Menu from '@steroidsjs/core/ui/content/Menu/Menu';

/**
 * @order 1
 * @col 6
 */

const VoidFunction = () => {};

export default () => (
    <>
        <Menu
            closeMode='click-any'
            position='bottom'
            items={[
                {label: 'Вырезать', icon: 'cut', onClick: VoidFunction},
                {label: 'Копировать', icon: 'copy', onClick: VoidFunction},
                {label: 'Вставить', icon: 'paste', onClick: VoidFunction},
                {label: 'Специальная вставка', hasBorder: true, onClick: VoidFunction},
                {label: 'Показать историю изменений', hasBorder: true, onClick: VoidFunction},
                {label: 'Вставить строку', onClick: VoidFunction},
                {label: 'Вставить столбец', onClick: VoidFunction},
                {label: 'Вставить ячейки', hasBorder: true, onClick: VoidFunction},
                {label: 'Редактировать', icon: 'edit-duotone', onClick: VoidFunction},
                {label: 'Сделать основным', icon: 'pin', onClick: VoidFunction},
                {label: 'Удалить', icon: 'trash', onClick: VoidFunction},
            ]}
        />
    </>
);
