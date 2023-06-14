/* eslint-disable import/no-extraneous-dependencies */
import {gsap} from 'gsap';

const propsTableSelector = '.ApiTable__title';

export const scrollToPropsTable = () => {
    gsap.to(window, {duration: 1, scrollTo: document.querySelector(propsTableSelector)});
};
