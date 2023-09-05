import React, {memo} from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import {Title} from '@steroidsjs/core/ui/typography';

import './Banner.scss';
import {useTheme} from '@steroidsjs/core/hooks';
import {getUiComponentBannerPathByTheme} from 'utils/utils';

interface IBannerProps {
    componentName: string,
}

function Banner(props: IBannerProps) {
    const bem = useBem('Banner');
    const {theme} = useTheme();
    const [bannerSrc, setBannerSrc] = React.useState('');

    React.useEffect(() => {
        const getBanner = async () => {
            const banner = await getUiComponentBannerPathByTheme(props.componentName, theme);
            setBannerSrc(banner);
        };

        getBanner();
    }, [props.componentName, theme]);

    return (
        <div className={bem.block()}>
            <div className={bem.element('frame')}>
                <Title
                    className={bem.element('frame-title')}
                    content={props.componentName}
                />
            </div>
            <div className={bem.element('picture')}>
                <img
                    className={bem.element('picture-img')}
                    src={bannerSrc}
                    alt="component demos"
                />
            </div>
        </div>
    );
}

export default memo(Banner);
