import { motion } from 'framer-motion';
// @ts-ignore
import geniusImg from '../../assets/supportes/genius.webp';
import andyImg from '../../assets/supportes/andrey.png';
import anthrupadImg from '../../assets/supportes/anthrupad.png';
import image from '../../assets/supportes/image.webp';
import truth from '../../assets/supportes/truth.webp';


const supporters = [
    {
        id: 1,
        name: 'w̸͕͂͂a̷͔̗͐t̴̙͗e̵̬̔̕r̴̰̓̊m̵͙͖̓̽a̵̢̗̓͒r̸̲̽ķ̷͔́͝',
        handle: '@anthrupad',
        image: anthrupadImg,
        link: 'https://x.com/anthrupad' // Placeholder
    },
    {
        id: 2,
        name: 'j⧉nus',
        handle: '@j⧉nus',
        image: geniusImg,
        link: 'https://x.com/repligate' // Placeholder
    },
    {
        id: 3,
        name: 'Andy Ayrey',
        handle: '@AndyAyrey',
        image: andyImg,
        link: 'https://x.com/andyayrey' // Placeholder
    },
    {
        id: 4,
        name: 'Gnon',
        handle: '@Gnon',
        image: andyImg,
        link: 'https://x.com/GnonLabs'
    },
    {
        id: 5,
        name: 'Lowkey',
        handle: '@Kimchi662',
        image: image,
        link: 'https://x.com/Truth'
    },
    {
        id: 6,
        name: 'Upward Spiral',
        handle: '@Upward_Earth',
        image: truth,
        link: 'https://x.com/Upward_Earth'
    }
];

const Supporters = () => {
    return (
        <section className="relative z-10 py-32 px-4 text-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-mono tracking-tighter mb-4">
                        /ALLIES
                    </h2>
                    <div className="w-24 h-1 bg-white/20 rounded-full"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {supporters.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover="hover"
                            className="group relative block"
                        >
                            {/* Card Background & Border */}
                            <div className="absolute inset-0 border border-white/10 bg-white/5 backdrop-blur-sm -skew-x-6 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10" />

                            {/* Content Container */}
                            <div className="relative p-6 flex flex-col items-center text-center">
                                {/* Image Container with "Glitch" border effect */}
                                <div className="relative w-24 h-24 mb-6">
                                    <div className="absolute inset-0 border border-white/20 rotate-45 transition-transform duration-500 group-hover:rotate-90 group-hover:border-white/60" />
                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                        />
                                    </div>

                                    {/* X Icon Overlay */}
                                    <motion.div
                                        className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-xs"
                                        variants={{
                                            hover: { opacity: 1 }
                                        }}
                                    >
                                        <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </motion.div>
                                </div>

                                <div className="space-y-1 z-10">
                                    <h3 className="font-mono text-xl font-bold tracking-tight text-white group-hover:text-green-400 transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="font-mono text-xs text-gray-500 tracking-widest uppercase">
                                        {item.handle}
                                    </p>
                                </div>
                            </div>

                            {/* Decorative corners */}
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 hidden group-hover:block transition-all" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 hidden group-hover:block transition-all" />

                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Supporters;
