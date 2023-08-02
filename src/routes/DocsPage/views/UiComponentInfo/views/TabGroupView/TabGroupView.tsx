import React from 'react';
import {useBem} from '@steroidsjs/core/hooks';
import {Button} from '@steroidsjs/core/ui/form';
import {IButtonGroupViewProps} from '@steroidsjs/core/ui/nav/ButtonGroup/ButtonGroup';
import __upperFirst from 'lodash-es/upperFirst';

import './TabGroupView.scss';

export default function TabGroupBView(props: IButtonGroupViewProps) {
    const bem = useBem('TabGroupView');

    return (
        <ul
            className={bem(
                bem.block({
                    size: props.size,
                }),
                props.className,
            )}
            style={props.style}
        >
            {props.items.map((item, index) => {
                const isActive = props.activeButton === item.id;

                return (
                    <li key={index}>
                        <Button
                            className={bem.element('button', {
                                default: !isActive,
                                active: isActive,
                            })}
                            label={__upperFirst(item.id)}
                            onClick={() => props.onClick(item.id)}
                            icon={item.label}
                            {...props.buttonProps}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
