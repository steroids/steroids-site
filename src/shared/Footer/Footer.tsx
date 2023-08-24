import {FOOTER_LINKS_COLUMNS, KOZHINDEV_LINK} from 'constants/links';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Link from '@steroidsjs/core/ui/nav/Link';
import {footerCredits} from 'data/indexPageData';
import Nav from '@steroidsjs/core/ui/nav/Nav';
import {designEmail} from '../../data/footerData';

import './Footer.scss';

export default function Footer() {
    const bem = useBem('Footer');

    return (
        <footer className={bem.block()}>
            <div className={bem.element('top')}>
                <div className={bem.element('top-left')}>
                    {
                        FOOTER_LINKS_COLUMNS.map((footerLinkColumn, footerLinkColumnIndex) => (
                            <Nav
                                key={footerLinkColumnIndex}
                                layout='list'
                                items={footerLinkColumn}
                            />
                        ))
                    }
                </div>
                <div className={bem.element('top-right')}>
                    <a href={`mailto:${designEmail}`}>{designEmail}</a>
                </div>
            </div>
            <div className={bem.element('separator')} />
            <div className={bem.element('bottom')}>
                <div className={bem.element('bottom-left')}>
                    <small>
                        {footerCredits}
                    </small>
                    {/* <Link className={bem.element('link')}>
                        {__('Политика конфиденциальности')}
                    </Link> */}
                </div>
                <Link
                    className={bem.element('bottom-right')}
                    url={KOZHINDEV_LINK}
                    target='blank'
                >
                    {__('Сделано в KozhinDev')}
                </Link>
            </div>
        </footer>
    );
}
