import * as React from 'react';
import Menu from '@steroidsjs/core/ui/content/Menu/Menu';

/**
 * @order 1
 * @col 6
 */

const voidFunction = () => {};

export default () => (
    <>
        <Menu
            dropDownProps={{
                position: 'bottom',
                closeMode: 'click-any',
            }}
            items={[
                {label: 'Вырезать', icon: 'cut', onClick: voidFunction},
                {label: 'Копировать', icon: 'copy', onClick: voidFunction},
                {label: 'Вставить', icon: 'paste', onClick: voidFunction},
                {label: 'Специальная вставка', hasBorder: true, onClick: voidFunction},
                {label: 'Показать историю изменений', hasBorder: true, onClick: voidFunction},
                {label: 'Вставить строку', onClick: voidFunction},
                {label: 'Вставить столбец', onClick: voidFunction},
                {label: 'Вставить ячейки', hasBorder: true, onClick: voidFunction},
                {label: 'Редактировать', icon: 'edit-duotone', onClick: voidFunction},
                {label: 'Сделать основным', icon: 'pin', onClick: voidFunction},
                {label: 'Удалить', icon: 'trash', onClick: voidFunction},
            ]}
        />
    </>
);
