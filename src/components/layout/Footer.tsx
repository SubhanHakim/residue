import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative z-10 py-12 px-8 text-white border-t border-white/5 font-mono">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Social Icons - Left Side */}
                <div className="flex items-center gap-6">
                    <a href="https://x.com/residue_dev" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                        <span className="sr-only">X (Twitter)</span>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    {/* Using the same DexScreener/PumpFun icon logic as Hero but smaller */}
                    <a href="#">
                        <span className="sr-only">DexScreener</span>
                        <img src="/dexscreener.svg" alt="DexScreener" className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
                    </a>
                </div>

                {/* Developer Credit - Right Side */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xs text-gray-500 tracking-widest text-center md:text-right"
                >
                    develops by <span className="text-gray-300">@Residue</span> | A
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
