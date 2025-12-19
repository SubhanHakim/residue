import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// @ts-ignore
import remnantImg from '../../assets/images/REMNANT.png';
// @ts-ignore
import residualImg from '../../assets/images/RESIDUAL.png';
// @ts-ignore
import ascensionImg from '../../assets/images/ASCENSION.png';
// @ts-ignore
import driftImg from '../../assets/images/DRIFT.png';
// @ts-ignore
import lumenImg from '../../assets/images/LUMEN.png';
// @ts-ignore
import recedingImg from '../../assets/images/RECEDING.png';
// @ts-ignore
import traceImg from '../../assets/images/TRACE.png';
// @ts-ignore
import veilImg from '../../assets/images/VEIL.png';

const images = [
    remnantImg, residualImg, ascensionImg, driftImg,
    lumenImg, recedingImg, traceImg, veilImg
];

const imageNames = [
    'REMNANT', 'RESIDUAL', 'ASCENSION', 'DRIFT',
    'LUMEN', 'RECEDING', 'TRACE', 'VEIL'
];

// Placeholder data generator
const artItems = images.map((image, i) => ({
    id: i + 1,
    title: `Residue Artifact: ${imageNames[i]}`,
    description: `A digital remnant of what was once whole. Fragment ${i + 1} captured in the void.`,
    imageUrl: image
}));

const Art = () => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section className="min-h-screen bg-black px-4 py-24 text-white">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center font-mono tracking-tighter"
                >
                    /COLLECTION
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {artItems.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={`card-container-${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="relative cursor-pointer group rounded-xl overflow-hidden border border-white/10 bg-white/5"
                        >
                            <motion.img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="font-mono text-sm tracking-widest border border-white/30 px-4 py-1 rounded-full backdrop-blur-md">
                                    VIEW
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-pointer"
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-2xl md:text-3xl font-bold font-mono text-white mb-8 tracking-widest text-center"
                            >
                                {artItems.find(i => i.id === selectedId)?.title.split(': ')[1] || 'ARTIFACT'}
                            </motion.h3>

                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                className="relative w-full max-w-sm md:max-w-md rounded-lg overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={artItems.find(i => i.id === selectedId)?.imageUrl}
                                    alt=""
                                    className="w-full h-auto object-contain max-h-[70vh]"
                                />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-8 text-gray-400 font-mono text-sm tracking-widest animate-pulse"
                            >
                                Click anywhere to dismiss
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Art;
