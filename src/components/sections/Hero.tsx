import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from "lucide-react";

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.2 }
        )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.6"
            )
            .fromTo(buttonsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );

    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">

            {/* Background Gradient Spotlights */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/40 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/40 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }}></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 relative z-20">
                <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight font-mono">
                    RESIDUE
                </h1>

                <p ref={subtitleRef} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-mono">
                    As presence is removed and meaning fades into distortion, RESIDUE exists as the remainder a human reduced to trace, shaped by loss and compression, persisting beyond erasure as silent proof that something once occupied this space.
                </p>

                <div ref={buttonsRef} className="flex flex-col items-center gap-8">
                    <button className="group relative flex items-center h-14 pl-0 pr-8 rounded-full bg-black border border-white overflow-hidden cursor-pointer transition-all hover:scale-105 active:scale-95">
                        <span className="h-full w-14 bg-white mr-6 block transition-all group-hover:w-20 duration-500 ease-out"></span>
                        <span className="font-mono text-xl text-white flex items-center gap-3">
                            Explore <ArrowDown className="w-5 h-5 animate-bounce" />
                        </span>
                    </button>

                    <div className="flex items-center gap-6 text-gray-400">
                        <a href="https://x.com/residue_dev" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white transition-colors hover:scale-110 transform duration-200">
                            <span className="sr-only">X (Twitter)</span>
                            <svg className="w-6 h-6 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="https://pump.fun/coin/AwwahP6CirNFrDGZJzo1z9wom3cdn18hCQMznDr5pump">
                            <span className="sr-only">DexScreener</span>
                            <img src="/dexscreener.svg" alt="DexScreener" className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

        </section>
    );
};

export default Hero;
