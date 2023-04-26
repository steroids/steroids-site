import * as React from 'react';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';
import Button from '@steroidsjs/core/ui/form/Button';
import {openModal} from '@steroidsjs/core/actions/modal';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';

const sizesArray: Size[] = ['sm', 'md', 'lg'];

function DemoModal(props: IModalProps) {
    return (
        <Modal
            title={`${props.size} modal`}
            onClose={props.onClose}
            {...props}
        >
            <div style={{marginBottom: '20px'}}>
                This is your content for
                <strong>
                    {' '}
                    {props.size}
                    {' '}
                </strong>
                modal.
            </div>
        </Modal>
    );
}

/**
 * По-умолчанию, Modal имеет 3 заданных размера.
 * @order 3
 * @col 12
 */
export default () => {
    const dispatch = useDispatch();
    return (
        <div style={{display: 'flex'}}>
            {sizesArray.map((size) => (
                <Button
                    key={size}
                    label={`Open ${size} modal`}
                    onClick={e => {
                        e.preventDefault();
                        dispatch(openModal(DemoModal, {
                            modalId: 'demo',
                            size,
                        }));
                    }}
                    style={{marginRight: '20px'}}
                />
            ))}
        </div>
    );
};
