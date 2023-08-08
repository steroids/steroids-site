/* eslint-disable import/no-extraneous-dependencies */
import {gsap} from 'gsap';

export const scrollToElement = (elementQuery: string) => {
    gsap.to(window, {duration: 1, scrollTo: document.querySelector(elementQuery)});
};

export const scrollToTop = () => {
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
};
