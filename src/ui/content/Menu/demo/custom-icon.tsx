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
            icon='folder'
            items={[
                {label: 'Вырезать', icon: 'cut_8', onClick: voidFunction},
                {label: 'Копировать', icon: 'copy_8', onClick: voidFunction},
                {label: 'Вставить', icon: 'paste_8', onClick: voidFunction},
                {label: 'Специальная вставка', hasBorder: true, onClick: voidFunction},
                {label: 'Показать историю изменений', hasBorder: true, onClick: voidFunction},
                {label: 'Вставить строку', onClick: voidFunction},
                {label: 'Вставить столбец', onClick: voidFunction},
                {label: 'Вставить ячейки', hasBorder: true, onClick: voidFunction},
                {label: 'Редактировать', icon: 'edit_duotone_8', onClick: voidFunction},
                {label: 'Сделать основным', icon: 'pin_8', onClick: voidFunction},
                {label: 'Удалить', icon: 'trash_8', onClick: voidFunction},
            ]}
        />
    </>
);
