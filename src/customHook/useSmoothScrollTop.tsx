import { useCallback } from "react";

const useSmoothScrollTop = () => {
    const smoothScrollTo = useCallback((element: HTMLElement, duration = 600) => {
        if (!element) return;

        const targetY = element.getBoundingClientRect().top + window.scrollY;
        const startY = window.scrollY;
        const distance = targetY - startY;
        let startTime: number | null = null;

        const easeInOutQuad = (t: number) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const scroll = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = easeInOutQuad(Math.min(elapsed / duration, 1));

            window.scrollTo(0, startY + distance * progress);
            if (elapsed < duration) requestAnimationFrame(scroll);
        };

        requestAnimationFrame(scroll);
    }, []);

    return smoothScrollTo;
};

export default useSmoothScrollTop;