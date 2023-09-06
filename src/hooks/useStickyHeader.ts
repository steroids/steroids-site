/* eslint-disable no-unused-expressions */
import gsap from 'gsap';
import React from 'react';

enum ScrollDirection {
    UP = 'up',
    DOWN = 'down',
}

const SCROLL_DELTA = 10;
const START_SCROLL_VALUE = 0;

const HEADER_OPACITY_VISIBLE = 1;
const HEADER_OPACITY_HIDDEN = 0;

const HEADER_MAX_HEIGHT_VISIBLE = 64;
const HEADER_MAX_HEIGHT_HIDDEN = 0;

const ANIMATION_DURATION_SECONDS = 0.3;

export const useStickyHeader = (headerRef: React.MutableRefObject<HTMLElement>) => {
    const [scrollDirection, setScrollDirection] = React.useState<ScrollDirection>(ScrollDirection.UP);

    React.useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? ScrollDirection.DOWN : ScrollDirection.UP;

            if (direction !== scrollDirection && (scrollY - lastScrollY > SCROLL_DELTA || scrollY - lastScrollY < -SCROLL_DELTA)) {
                setScrollDirection(direction);
            }

            lastScrollY = scrollY > START_SCROLL_VALUE
                ? scrollY
                : START_SCROLL_VALUE;
        };

        document.addEventListener('scroll', updateScrollDirection);

        return () => {
            document.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection]);

    React.useEffect(() => {
        scrollDirection === ScrollDirection.UP
            ? gsap.to(headerRef.current, {
                opacity: HEADER_OPACITY_VISIBLE,
                maxHeight: HEADER_MAX_HEIGHT_VISIBLE,
                duration: ANIMATION_DURATION_SECONDS,
            })
            : gsap.to(headerRef.current, {
                opacity: HEADER_OPACITY_HIDDEN,
                maxHeight: HEADER_MAX_HEIGHT_HIDDEN,
                duration: ANIMATION_DURATION_SECONDS,
            });
    }, [headerRef, scrollDirection]);
};
