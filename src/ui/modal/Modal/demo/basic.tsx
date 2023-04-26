import * as React from 'react';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';
import Button from '@steroidsjs/core/ui/form/Button';
import {openModal} from '@steroidsjs/core/actions/modal';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';

function DemoModal(props: IModalProps) {
    return (
        <Modal
            title='Basic Modal'
            onClose={props.onClose}
            {...props}
            id={props.modalId}
        >
            <div style={{marginBottom: '20px'}}>
                This is your modal content.
            </div>
        </Modal>
    );
}

/**
 * Простой пример Modal, с заданным заголовком и контентом.
 * @order 1
 * @col 6
 */
export default () => {
    const dispatch = useDispatch();
    return (
        <>
            <Button
                label='Open modal'
                onClick={e => {
                    console.log('Hello');
                    e.preventDefault();
                    dispatch(openModal(DemoModal, {
                        modalId: 'demoModal',
                    }));
                }}
            />
        </>
    );
};
