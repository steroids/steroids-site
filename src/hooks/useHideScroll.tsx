import React from 'react';
import {getClassSelector} from 'utils/utils';

export function useHideScroll(isHideScroll: boolean) {
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
    }, [isHideScroll]);
}
