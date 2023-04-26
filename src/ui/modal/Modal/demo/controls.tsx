import * as React from 'react';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';
import Button from '@steroidsjs/core/ui/form/Button';
import {openModal} from '@steroidsjs/core/actions/modal';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';

function DemoModal(props: IModalProps) {
    return (
        <Modal
            title='Modal with controls'
            onClose={props.onClose}
            controls={[
                {label: 'Show Alert', onClick: () => alert('This is alert!')},
                {label: 'Close', onClick: () => props.onClose()},
            ]}
            {...props}
        >
            <div style={{marginBottom: '20px'}}>
                This is your modal content.
            </div>
        </Modal>
    );
}

/**
 * Modal содержит набор контролов с привязанными обработчиками.
 * @order 2
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
                    }));
                }}
            />
        </>
    );
};
