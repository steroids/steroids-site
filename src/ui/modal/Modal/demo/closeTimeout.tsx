import * as React from 'react';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';
import Button from '@steroidsjs/core/ui/form/Button';
import {openModal} from '@steroidsjs/core/actions/modal';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';

function DemoModal(props: IModalProps) {
    return (
        <Modal
            title='Custom closing time'
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
 * Настройка времени, через которое произойдет закрытие Modal.
 * @order 5
 * @col 6
 */
export default () => {
    const dispatch = useDispatch();

    return (
        <>
            <Button
                label='Open modal'
                onClick={e => {
                    dispatch(openModal(DemoModal, {
                        modalId: 'demo',
                        closeTimeoutMs: 1000,
                    }));
                }}
            />
        </>
    );
};
