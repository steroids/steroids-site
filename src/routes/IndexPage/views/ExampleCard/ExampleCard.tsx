import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text, Title} from '@steroidsjs/core/ui/typography';

import './ExampleCard.scss';
import {Button} from '@steroidsjs/core/ui/form';
import {useDispatch} from '@steroidsjs/core/hooks';
import {goToRoute} from '@steroidsjs/core/actions/router';
import {ROUTE_DOCS} from 'constants/routes';

interface IExampleCardProps {
    label?: string;
    img?: string;
}

export default function ExampleCard(props: IExampleCardProps) {
    const bem = useBem('ExampleCard');
    const dispatch = useDispatch();

    const hasContent = !!props.label && !!props.img;

    return (
        <div className={bem.block()}>
            {hasContent && (
                <>
                    <Title
                        content={props.label}
                        className={bem.element('title')}
                    />

                    <div className={bem.element('img-wrapper')}>
                        <img
                            src={props.img}
                            alt="example card"
                        />
                    </div>
                </>
            )}
            {!hasContent
                && (
                    <div className={bem.element('more')}>
                        <Text
                            className={bem.element('more-text')}
                            content={__('Ещё больше компонентов')}
                        />
                        <Button
                            onClick={() => dispatch(goToRoute(ROUTE_DOCS))}
                            label={__('Здесь')}
                            size='lg'
                        />
                    </div>
                )}
        </div>
    );
}
