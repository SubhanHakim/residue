import { useEffect, useRef } from 'react';

interface Starprop {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
}

const Starfield = ({
    density = 500,
    speed = 0.5,
    className = ""
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let stars: Starprop[] = [];
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const initStars = () => {
            stars = Array.from({ length: density }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2, // Varied size for depth
                opacity: Math.random(),
                speed: (Math.random() * 0.5 + 0.1) * speed
            }));
        };

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#ffffff';

            stars.forEach((star) => {
                ctx.globalAlpha = star.opacity;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Move star
                star.y -= star.speed; // Move upwards

                // Reset if out of screen
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }
            });

            animationFrameId = requestAnimationFrame(drawStars);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [density, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed inset-0 z-0 pointer-events-none bg-black ${className}`}
        />
    );
};

export default Starfield;
