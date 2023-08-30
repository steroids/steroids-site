import * as React from 'react';
import Modal, {IModalProps} from '@steroidsjs/core/ui/modal/Modal/Modal';
import Button from '@steroidsjs/core/ui/form/Button';
import {openModal} from '@steroidsjs/core/actions/modal';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';
import _upperFirst from 'lodash-es/upperFirst';

const sizes = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
};

function DemoModal(props: IModalProps) {
    return (
        <Modal
            title={_upperFirst(`${props.label} modal`)}
            onClose={props.onClose}
            buttons={[
                {label: 'Alert', onClick: () => alert('This is alert!'), outline: true},
                {label: 'Close', onClick: () => props.onClose()},
            ]}
            {...props}
        >
            <div>
                This is your content for
                <strong>
                    {' '}
                    {props.label}
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
        <div style={{display: 'flex', flexFlow: 'row wrap', gap: '20px'}}>
            {Object.entries(sizes).map(([size, label]) => (
                <Button
                    key={size}
                    label={`Open ${label} modal`}
                    onClick={e => {
                        e.preventDefault();
                        dispatch(openModal(DemoModal, {
                            modalId: 'demo',
                            size,
                            label,
                        }));
                    }}
                />
            ))}
        </div>
    );
};
