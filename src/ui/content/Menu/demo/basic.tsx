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
                {label: __('Вырезать'), icon: 'cut', onClick: voidFunction},
                {label: __('Копировать'), icon: 'copy', onClick: voidFunction},
                {label: __('Вставить'), icon: 'paste', onClick: voidFunction},
                {label: __('Специальная вставка'), hasBorder: true, onClick: voidFunction},
                {label: __('Показать историю изменений'), hasBorder: true, onClick: voidFunction},
                {label: __('Вставить строку'), onClick: voidFunction},
                {label: __('Вставить столбец'), onClick: voidFunction},
                {label: __('Вставить ячейки'), hasBorder: true, onClick: voidFunction},
                {label: __('Редактировать'), icon: 'edit', onClick: voidFunction},
                {label: __('Сделать основным'), icon: 'pin', onClick: voidFunction},
                {label: __('Удалить'), icon: 'trash', onClick: voidFunction},
            ]}
        />
    </>
);
