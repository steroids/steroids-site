/* eslint-disable import/no-extraneous-dependencies */
import {gsap} from 'gsap';

export const scrollToPropsTable = () => {
    gsap.to(window, {duration: 1, scrollTo: document.querySelector('.ApiTable__title')});
};
