import React from 'react';

const HEADER_WRAPPER_CLASS = 'Header__wrapper';

export function useHideScroll(isHideScroll) {
    const headerWrapper: HTMLDivElement = process.env.IS_SSR ? null : document.querySelector(`.${HEADER_WRAPPER_CLASS}`);

    React.useEffect(() => {
        if (process.env.IS_SSR) {
            return () => { };
        }

        if (isHideScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [headerWrapper, isHideScroll]);
}
