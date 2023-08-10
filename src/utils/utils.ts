/* eslint-disable import/no-extraneous-dependencies */
import {gsap} from 'gsap';

export const scrollToElement = (elementQuery: string) => {
    gsap.to(window, {duration: 1, scrollTo: document.querySelector(elementQuery)});
};

export const getIdSelector = (id: string) => `#${id}`;
export const getClassSelector = (className: string) => `.${className}`;
