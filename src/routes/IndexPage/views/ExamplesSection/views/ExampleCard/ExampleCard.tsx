import {CATEGORY_UI} from 'constants/categories';
import {CATEGORY_ROUTE_PARAM, LANGUAGE_ROUTE_PARAM} from 'constants/routeParams';
import {ROUTE_DOCS} from 'constants/routes';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Text, Title} from '@steroidsjs/core/ui/typography';
import {Button} from '@steroidsjs/core/ui/form';
import {useComponents, useTheme} from '@steroidsjs/core/hooks';

import './ExampleCard.scss';

interface IExampleCardProps {
    label?: string;
    img?: string;
    isMoreCard?: boolean;
}

export default function ExampleCard(props: IExampleCardProps) {
    const bem = useBem('ExampleCard');
    const {locale} = useComponents();
    const {theme} = useTheme();

    if (props.isMoreCard) {
        return (
            <div className={bem.block()}>
                <div className={bem.element('more')}>
                    <Text
                        className={bem.element('more-text')}
                        content={__('Ещё больше компонентов')}
                    />
                    <Button
                        toRoute={ROUTE_DOCS}
                        toRouteParams={{
                            [LANGUAGE_ROUTE_PARAM]: locale.language,
                            [CATEGORY_ROUTE_PARAM]: CATEGORY_UI,
                        }}
                        label={__('Здесь')}
                        size='lg'
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={bem.block()}>
            <Title
                content={props.label}
                className={bem.element('title')}
            />

            <div className={bem.element('img-wrapper')}>
                <img
                    src={`/images/examples/${theme}/${props.img}`}
                    alt="example card"
                />
            </div>
        </div>
    );
}
