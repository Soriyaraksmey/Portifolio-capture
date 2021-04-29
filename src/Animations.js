export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.4,
        },
    }
};

export const titleAnimate = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" }
    },
};

export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" }
    },
}

export const ImgAnim = {
    hidden: { opacity: 0, scale: 1.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
}

export const LineAnim = {
    hidden: { width: "0%" },
    show: { width: "100%", transition: { duration: 1, ease: "easeOut" } },
}

export const Slider = {
    hidden: { x: "-130%", skew: "45deg" },
    show: { x: "100%", skew: "0deg", transition: { ease: "easeOut", duration: 1 } },
}

export const sliderContainer = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, ease: "easeOut" } }
}

export const swipe = {
    hidden: { scale: 0.5, transition: { duration: 1 } },
    show: { scale: 1, transition: { duration: 1 } }
}
export const swipe2 = {
    hidden: { width: "0%", transition: { duration: 1 } },
    show: { width: "100%", transition: { duration: 1 } }
}