/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import useApplication from '@steroidsjs/core/hooks/useApplication';
import HttpComponent from '@steroidsjs/core/components/HttpComponent';
import LocaleComponent from '@steroidsjs/core/components/LocaleComponent';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

import 'style/index.scss';

export default function Application() {
    const {renderApplication} = useApplication({
        reducers: require('@steroidsjs/core/reducers').default,
        routes: () => require('routes').default,
        layoutView: () => require('shared/Layout').default,
        screen: {},
        components: {
            locale: LocaleComponent,
            http: HttpComponent,
        },
        onInit: ({ui}) => {
            ui.addViews(require('./ui/bootstrap').default);
            ui.addFields(require('@steroidsjs/core/ui/form').default);
            ui.addFormatters(require('@steroidsjs/core/ui/format').default);
            ui.addIcons(require('@steroidsjs/bootstrap/icons/index').default);
        },
    });

    React.useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    });

    return renderApplication();
}
