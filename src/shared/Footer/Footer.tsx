import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import Link from '@steroidsjs/core/ui/nav/Link';
import {footerCredits} from 'data/indexPageData';
import {designEmail, footerColumns} from '../../data/footerData';

import './Footer.scss';

export default function Footer() {
    const bem = useBem('Footer');

    return (
        <footer className={bem.block()}>
            <div className={bem.element('top')}>
                <div className={bem.element('top-left')}>
                    {
                        footerColumns.map((column, columnIndex) => (
                            <div
                                key={columnIndex}
                                className={bem.element('column')}
                            >
                                {column.map((columnItem, columnItemIndex) => (
                                    <Link
                                        className={bem.element('link')}
                                        key={columnItemIndex}
                                        label={columnItem.label}
                                    />
                                ))}
                            </div>
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
                    <Link className={bem.element('link')}>
                        {__('Политика конфиденциальности')}
                    </Link>
                </div>
                <div className={bem.element('bottom-right')}>
                    {__('Сделано в KozhinDev')}
                </div>
            </div>
        </footer>
    );
}
