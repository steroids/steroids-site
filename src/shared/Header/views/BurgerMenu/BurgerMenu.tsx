/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {HEADER_LINKS} from 'constants/links';
import {CATEGORY_ROUTE_PARAM, PATH_ROUTE_PARAM} from 'constants/routeParams';
import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Icon} from '@steroidsjs/core/ui/content';
import {useDocsPageData} from 'hooks/useDocsPageData';
import Nav from '@steroidsjs/core/ui/nav/Nav';
import ThemesButtons from 'shared/ThemesButtons';
import Tree from '@steroidsjs/core/ui/nav/Tree';
import CustomTree from 'shared/CustomTree';
import {useSelector} from '@steroidsjs/core/hooks';
import {getRouteParam, getRouteParams} from '@steroidsjs/core/reducers/router';
import {useDefaultSelectedItemId} from 'hooks/useDefaultSelectedItemId';
import LanguagesDropDown from '../LanguagesDropDown';
import SearchInput from '../SearchInput';

import './BurgerMenu.scss';

interface IBurgerMenuProps {
    isBurgerOpened: boolean;
    onClickMenu: () => void,
    onSelectInMenu: () => void;
}

export default function BurgerMenu(props: IBurgerMenuProps) {
    const bem = useBem('BurgerMenu');
    const {treeItems} = useDocsPageData();
    const category = useSelector(state => getRouteParam(state, CATEGORY_ROUTE_PARAM));
    const path = useSelector(state => getRouteParam(state, PATH_ROUTE_PARAM));
    const params = useSelector(state => getRouteParams(state));

    const defaultSelectedItemId = useDefaultSelectedItemId(params);

    React.useEffect(() => {
        props.onSelectInMenu();
    }, [category, path]);

    return (
        <div className={bem.block()}>
            <div className={bem.element('icon')}>
                <div
                    className={bem.element('wrapper')}
                    onClick={props.onClickMenu}
                >
                    <Icon
                        className={bem.element('button')}
                        name={props.isBurgerOpened ? 'cross_12x12' : 'burger'}
                    />
                </div>
            </div>
            <div className={bem.element('burger-menu', {
                visible: props.isBurgerOpened,
            })}
            >
                <Nav
                    items={HEADER_LINKS}
                    className={bem.element('nav')}
                    layout='link'
                />
                <div className={bem.element('controls')}>
                    <LanguagesDropDown className={bem.element('controls-languages')} />
                </div>
                <div className={bem.element('search')}>
                    <SearchInput
                        className={bem.element('input')}
                        placeholder={__('Найти компонент')}
                    />
                </div>
                <div className={bem.element('tree')}>
                    <Tree
                        view={CustomTree}
                        items={treeItems}
                        alwaysOpened
                        defaultSelectedUniqId={defaultSelectedItemId}
                    />
                </div>
            </div>
        </div>
    );
}
