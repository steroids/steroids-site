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
    item: {
        label ? : string;
        img ? : string;
        isMoreCard ? : boolean;
    }
}

export default function ExampleCard(props: IExampleCardProps) {
    const bem = useBem('ExampleCard');
    const {locale} = useComponents();
    const {theme} = useTheme();

    const {isMoreCard, img, label} = props.item;

    if (isMoreCard) {
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
                content={label}
                className={bem.element('title')}
            />

            <div className={bem.element('img-wrapper', {
                [img]: !!img,
            })}
            >
                <img
                    src={`/images/examples/${theme}/${img}.png`}
                    alt="example card"
                />
            </div>
        </div>
    );
}
