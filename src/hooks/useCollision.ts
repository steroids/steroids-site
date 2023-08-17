/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React from 'react';

const THROTTLE_DELAY = 50;
const DEFAULT_COLLISION_STATE = true;
const AUTOSCROLL_DELAY = 1000;

const throttle = (callback, delay) => {
    let timeoutId;
    return function (...args) {
        if (!timeoutId) {
            timeoutId = setTimeout(() => {
                callback.apply(this, args);
                timeoutId = null;
            }, delay);
        }
    };
};

/**
 * Хук для обработки определения столкновений между элементом-триггером и другими элементами на странице.
 *
 * @param {React.MutableRefObject<any>} triggerElement - Ref элемента-триггера для обнаружения столкновений.
 * @param {(intersectingElement: Element) => void} onCollision - Функция обратного вызова, которая будет вызываться при обнаружении столкновения.
 * @param {string} elementToObserveQuery - Селектор элементов для наблюдения за столкновениями с элементом-триггером.
 * @param {boolean} [useAutoScroll=false] - Опционально. Если true, учитывает автоматическую прокрутку через gsap с задержкой в 1 секунду
 *  при отключении столкновений через toggleOffCollision.
 * @returns {{toggleOffCollision: () => void, toggleOnCollision: () => void, isCollisionActive: boolean}}
 * - Объект с функциями для включения/отключения обнаружения столкновений и текущим состоянием обнаружения столкновений.
 */
export const useCollision = (
    triggerElement: React.MutableRefObject<any>,
    onCollision: (intersectingElement: Element) => void,
    elementToObserveQuery: string,
    useAutoScroll = false,
) => {
    const [isCollisionActive, setIsCollisionActive] = React.useState(DEFAULT_COLLISION_STATE);
    const [isAutoScrolling, setIsAutoScrolling] = React.useState(false);

    React.useEffect(() => {
        if (process.env.IS_SSR) {
            return () => {};
        }

        const handleCollisionCheck = () => {
            if (isCollisionActive) {
                const centerElement = triggerElement.current;
                const otherElements = document.querySelectorAll(elementToObserveQuery);

                otherElements.forEach((element) => {
                    const centerRect = centerElement.getBoundingClientRect();
                    const otherRect = element.getBoundingClientRect();

                    if (
                        centerRect.top < otherRect.bottom
                        && centerRect.bottom > otherRect.top
                        && centerRect.left < otherRect.right
                        && centerRect.right > otherRect.left
                    ) {
                        // Соприкосновение элементов
                        onCollision(element);
                    }
                });
            }
        };

        const throttledHandleCollisionCheck = throttle(handleCollisionCheck, THROTTLE_DELAY);

        document.addEventListener('scroll', throttledHandleCollisionCheck);

        return () => {
            document.removeEventListener('scroll', throttledHandleCollisionCheck);
        };
    }, [isCollisionActive]);

    const toggleOffCollision = React.useCallback(() => {
        setIsCollisionActive(false);

        if (useAutoScroll) {
            setIsAutoScrolling(true);
            setTimeout(() => {
                setIsAutoScrolling(false);
            }, AUTOSCROLL_DELAY);
        }
    }, [useAutoScroll]);

    const toggleOnCollision = React.useCallback(() => {
        setIsCollisionActive(true);
    }, []);

    React.useEffect(() => {
        if (process.env.IS_SSR) {
            return () => {};
        }

        const continueCollision = () => {
            if (!isAutoScrolling) {
                toggleOnCollision();
            }
        };
        document.addEventListener('scroll', continueCollision);

        return () => {
            document.removeEventListener('scroll', continueCollision);
        };
    }, [isAutoScrolling, toggleOnCollision]);

    return {toggleOffCollision, toggleOnCollision, isCollisionActive};
};
