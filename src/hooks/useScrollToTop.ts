import React from 'react';
import {scrollToTop} from 'utils/utils';

export const useScrollToTop = () => {
    React.useEffect(() => {
        scrollToTop();
    });
};
