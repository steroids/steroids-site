import * as React from 'react';
import Modal from '@steroidsjs/core/ui/modal/Modal/Modal';
import Button from '@steroidsjs/core/ui/form/Button';
import {openModal} from '@steroidsjs/core/actions/modal';
import useDispatch from '@steroidsjs/core/hooks/useDispatch';

/**
 * Контент для Modal также можно задать через свойство component.
 * При этом, в action openModal необязательно передавать отдельный компонент, построенный на базе Modal.
 * Можно передать сам Modal, контент настроить уже через свойства Modal.
 * @order 6
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
                    dispatch(openModal(Modal, {
                        modalId: 'demo',
                        title: 'Modal based only on props',
                        component: () => (
                            <div style={{marginBottom: '20px'}}>
                                This is your modal content.
                            </div>
                        ),
                        controls: [
                            {label: 'Show Alert', onClick: () => alert('This is alert!')},
                        ],
                    }));
                }}
            />
        </>
    );
};
