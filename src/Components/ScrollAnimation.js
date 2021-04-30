import React from 'react';
//for scroll animaton
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const ScrollAnimation = () => {
    const controls = useAnimation();
    const [elements, view] = useInView({ threshold: 0.5 });
    if (view) {
        controls.start("show");
    } else {
        controls.start("hidden");
    }

    return [elements, controls];
}

export default ScrollAnimation;