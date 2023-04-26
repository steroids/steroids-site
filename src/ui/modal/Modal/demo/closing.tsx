import * as React from 'react';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';
import Button from '@steroidsjs/core/ui/form/Button';
import {openModal} from '@steroidsjs/core/actions/modal';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';

function DemoModal(props: IModalProps) {
    return (
        <Modal
            title='Modal with custom closing'
            onClose={props.onClose}
            {...props}
        >
            <div style={{marginBottom: '20px'}}>
                This is your modal content.
            </div>
        </Modal>
    );
}

/**
 * Обработка закрытия Modal при помощи onClose.
 * Также это модальное окно не закроется при нажатии на клавишу 'ESC' или клике на overlay.
 * @order 4
 * @col 6
 */
export default () => {
    const dispatch = useDispatch();
    return (
        <>
            <Button
                label='Open modal'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal(DemoModal, {
                        modalId: 'demo',
                        onClose: () => alert('Modal will be closed!'),
                        shouldCloseOnOverlayClick: false,
                        shouldCloseOnEsc: false,
                    }));
                }}
            />
        </>
    );
};
