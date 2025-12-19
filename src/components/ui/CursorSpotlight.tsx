import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // We use a spring for the "trace" or "residue" following the cursor
    const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
    const traceX = useSpring(cursorX, springConfig);
    const traceY = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Hide default cursor
        document.body.style.cursor = 'none';

        window.addEventListener('mousemove', moveCursor);

        // Add hover detection for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Dynamic observer for new elements (like routed pages)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const newInteractiveElements = document.querySelectorAll('a, button, input, [role="button"]');
                    newInteractiveElements.forEach((el) => {
                        el.addEventListener('mouseenter', handleMouseEnter);
                        el.addEventListener('mouseleave', handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', moveCursor);
            observer.disconnect();
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            {/* The "Residue" / Trace Follower */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-white mix-blend-difference"
                style={{
                    x: traceX,
                    y: traceY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovering ? 64 : 40,
                    height: isHovering ? 64 : 40,
                    opacity: isHovering ? 0.8 : 0.5,
                }}
                transition={{ duration: 0.2 }}
            />

            {/* The Main Sharp Indicator */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-white mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    );
};

export default CustomCursor;
