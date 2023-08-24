import React from 'react';

const ANIMATION_TOGGLED_BY_DEFAULT = false;

export const useToggleAnimation = () => {
    const [isAnimationToggled, setIsAnimationToggled] = React.useState(ANIMATION_TOGGLED_BY_DEFAULT);

    return {
        onMouseEnter: () => setIsAnimationToggled(true),
        onMouseLeave: () => setIsAnimationToggled(false),
        isAnimationToggled,
    };
};
