/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import useApplication from '@steroidsjs/core/hooks/useApplication';
import HttpComponent from '@steroidsjs/core/components/HttpComponent';
import LocaleComponent from '@steroidsjs/core/components/LocaleComponent';
import ResourceComponent from '@steroidsjs/core/components/ResourceComponent';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {icons} from 'icons';
import {detectLanguage} from 'hooks/useAppLanguage';
import {translationsMap} from 'constants/translationsMap';

import 'style/index.scss';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default function Application() {
    const {renderApplication} = useApplication({
        reducers: require('@steroidsjs/core/reducers').default,
        routes: () => require('routes').default,
        layoutView: () => require('shared/Layout').default,
        screen: {},
        theme: {},
        components: {
            locale: LocaleComponent,
            http: HttpComponent,
            resource: ResourceComponent,
        },
        onInit: ({ui, locale, store}) => {
            // В момент создания в LocaleComponent язык указывается только на основе config'а, переданного в компонент
            // Но на этом этапе нет возможности передать правильный язык (или функцию определения правильного языка)
            // в компонент, поэтому мы устанавливаем язык после того, как компонент был проинициализирован
            // (функция onInit) вызывается после инициализации всех компонентов
            // @todo нужно перенести определение и установку языка в кастомный LocaleComponent, проверив и работу SSR
            const contextLanguage = detectLanguage(store.history.location.pathname);
            locale.language = contextLanguage;
            locale.translations = translationsMap[contextLanguage];

            ui.addViews(require('./ui/bootstrap').default);
            ui.addFields(require('@steroidsjs/core/ui/form').default);
            ui.addFormatters(require('@steroidsjs/core/ui/format').default);
            ui.addIcons(require('@steroidsjs/bootstrap/icons/index').default(icons));
        },
    });

    React.useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    });

    return renderApplication();
}
