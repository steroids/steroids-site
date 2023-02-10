/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import {useBem} from '@steroidsjs/core/hooks';

import './IndexPage.scss';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    return (
        <div className={bem.block()}>
            <div className={bem.element('centered')}>
                <div className={bem.element('title')}>
                    {'Steroids — фреймворк для создания сложных и расширяемых веб-приложений'}
                </div>
                <div className={bem.element('image')}>
                    <img
                        src='/images/index-app-illustration.png'
                        alt={'Steroids — фреймворк для создания сложных и расширяемых веб-приложений'}
                    />
                </div>
            </div>
        </div>
    );
}
