import {gsap} from 'gsap';
import React from 'react';

export const useScrollToTop = () => {
    React.useEffect(() => {
        if (process.env.IS_SSR) {
            return;
        }

        const scrollTopEnd = 0;

        // Получаем текущую позицию вертикальной прокрутки
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Проверяем, нужно ли выполнять анимацию скроллинга
        if (currentScrollTop > scrollTopEnd) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: scrollTopEnd,
                    autoKill: false,
                },
            });
        }
    });
};
