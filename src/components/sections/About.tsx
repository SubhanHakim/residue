import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

const About = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'America/New_York', // Eastern Time (US)
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };
            setTime(now.toLocaleTimeString('en-US', options));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger animations by 0.2s
                delayChildren: 0.3    // Delay start until 0.3s after in view
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30, x: -20 }, // Slide slightly from left and bottom
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    // Different variant for right column items to slide from right
    const rightItemVariants: Variants = {
        hidden: { opacity: 0, y: 30, x: 20 },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-black px-4 py-20 text-white overflow-hidden">

            {/* Decorative Blur Background - optional, keeping consistent with Hero */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gray-800/20 rounded-full blur-[120px] -z-10"></div>

            <motion.div
                className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            >

                {/* Left Column: Logo, Title, Time */}
                <div className="flex flex-col items-start space-y-6">
                    <motion.div variants={itemVariants} className="flex items-center gap-4">
                        <img
                            src="/logo.png"
                            alt="Residue Logo"
                            className="w-20 h-20 object-cover rounded-xl border border-gray-800"
                        />
                        <h2 className="text-6xl font-bold tracking-tighter font-mono">RESIDUE</h2>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-mono text-sm text-gray-400">US TIME (EST): {time}</span>
                    </motion.div>
                </div>

                {/* Right Column: Description */}
                <div className="space-y-6">
                    <motion.p variants={rightItemVariants} className="text-xl md:text-2xl leading-relaxed text-gray-300 font-mono">
                        We are not just a brand; we are the remnants of what was once whole.
                        In a digital age where everything is ephemeral, RESIDUE stands as the persistent trace
                        of human creativity and chaotic beauty.
                    </motion.p>
                    <motion.p variants={rightItemVariants} className="text-lg leading-relaxed text-gray-500 font-mono">
                        Born from the static between signals, we craft experiences that linger.
                        Our mission is to explore the spaces left behind, giving form to the unseen
                        and voice to the quiet echoes of the web.
                    </motion.p>
                </div>

            </motion.div>
        </section>
    );
};

export default About;
