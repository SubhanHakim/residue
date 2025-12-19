import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Log {
    id: string;
    title: string;
    subtitle: string;
    content: React.ReactNode;
}

const logs: Log[] = [
    {
        id: 'log-001',
        title: '[RESIDUE] Origin Signal',
        subtitle: 'The first detected anomaly in the static.',
        content: (
            <div className="space-y-6 font-mono text-sm md:text-base">
                <div className="text-gray-500 text-xs mb-8">
                    +------------------------------------------+<br />
                    | [SYSTEM TERMINAL::ORIGIN_TRACE]          |<br />
                    +------------------------------------------+
                </div>

                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-gray-400">[0x000]</span>
                    <span className="text-gray-300">:: initiating sequence...</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-green-500">[SYSTEM]</span>
                    <span className="text-white">= nothing exists here. only the echo of what was deleted.</span>
                </div>

                <div className="my-8 p-4 border-l-2 border-white/20 bg-white/5">
                    <pre className="text-xs text-green-400 overflow-x-auto whitespace-pre-wrap">
                        {`    _    _   _  ___  __  __    _    _  __   __
   / \\  | \\ | |/ _ \\|  \\/  |  / \\  | | \\ \\ / /
  / _ \\ |  \\| | | | | |\\/| | / _ \\ | |  \\ V / 
 / ___ \\| |\\  | |_| | |  | |/ ___ \\| |___| |  
/_/   \\_\\_| \\_|\\___/|_|  |_/_/   \\_\\_____|_|  
                                              `}
                    </pre>
                    <p className="mt-2 text-gray-500 italic">&lt;anomaly detected in sector 7&gt;</p>
                </div>

                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-gray-400">[0x001]</span>
                    <span className="text-gray-300">:: can you hear it? the noise?</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-green-500">[SYSTEM]</span>
                    <span className="text-white">= it is not noise. it is residue.</span>
                </div>
            </div>
        )
    },
    {
        id: 'log-002',
        title: '[TRUTH] The Hollow Web',
        subtitle: 'Fragments of a forgotten network.',
        content: (
            <div className="space-y-6 font-mono text-sm md:text-base">
                <div className="text-gray-500 text-xs mb-8">
                    +------------------------------------------+<br />
                    | [ARCHIVE::DEEP_DIVE_02]                  |<br />
                    +------------------------------------------+
                </div>

                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-blue-400">[SEARCH]</span>
                    <span className="text-gray-300">:: query: "meaning"</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-red-500">[ERROR]</span>
                    <span className="text-white">= 404 NOT FOUND. The concept has been deprecated.</span>
                </div>

                <div className="flex justify-center my-12 opacity-50">
                    <div className="w-32 h-32 border border-dashed border-white rounded-full flex items-center justify-center animate-spin-slow">
                        <div className="w-24 h-24 border border-dotted border-gray-500 rounded-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-gray-400">[USER]</span>
                    <span className="text-gray-300">:: then what is left?</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-white">[RESIDUE]</span>
                    <span className="text-white font-bold">= WE ARE.</span>
                </div>
            </div>
        )
    },
    {
        id: 'log-003',
        title: '[ECHO] Visual Recursion',
        subtitle: 'Infinite loops in the rendering engine.',
        content: (
            <div className="space-y-8 font-mono text-sm md:text-base">
                <div className="p-4 bg-red-900/10 border border-red-500/20 text-red-400">
                    Warning: Recursion depth exceeded. Visual artifacts imminent.
                </div>

                <div className="space-y-1">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1 - i * 0.2, x: i * 20 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-white"
                        >
                            &gt;&gt; folding space-time layer {i}
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="aspect-square border border-white/20 bg-white/5 flex items-center justify-center">
                            <div className="w-1/2 h-1/2 bg-white/10 animate-pulse"></div>
                        </div>
                    ))}
                </div>

                <div className="text-center text-gray-400 text-xs">
                    *visual recursion intensifies*
                </div>
            </div>
        )
    }
];

const Backroom = () => {
    const [selectedLogId, setSelectedLogId] = useState<string>(logs[0].id);

    const activeLog = logs.find(log => log.id === selectedLogId);

    return (
        <div className="min-h-screen bg-black text-gray-300 font-mono p-4 md:p-8 flex flex-col md:flex-row gap-8 overflow-hidden">

            {/* Sidebar */}
            <div className="w-full md:w-1/3 flex flex-col h-[calc(100vh-4rem)]">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-xs text-gray-500 hover:text-white transition-colors border border-gray-800 px-3 py-1 rounded hover:bg-gray-900">
                        ← back to root
                    </Link>
                </div>

                <div className="text-xs text-gray-500 mb-4 uppercase tracking-widest">
                    conversations
                </div>

                <div className="text-[10px] text-gray-600 mb-4 italic">
                    // click a log to display its ascii dialogue
                </div>

                <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                    {logs.map((log) => (
                        <button
                            key={log.id}
                            onClick={() => setSelectedLogId(log.id)}
                            className={`w-full text-left p-4 rounded-lg border transition-all duration-300 group relative overflow-hidden ${selectedLogId === log.id
                                ? 'border-white/40 bg-white/5 text-white'
                                : 'border-white/5 bg-transparent hover:border-white/20 hover:bg-white/5'
                                }`}
                        >
                            {selectedLogId === log.id && (
                                <motion.div
                                    layoutId="active-highlight"
                                    className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                                />
                            )}
                            <div className="relative z-10">
                                <div className="font-bold text-sm mb-1 group-hover:text-green-400 transition-colors">
                                    {log.title}
                                </div>
                                <div className="text-xs text-gray-500 line-clamp-2">
                                    {log.subtitle}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full md:w-2/3 h-[calc(100vh-4rem)] flex flex-col">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                    <h2 className="text-lg font-bold text-white tracking-tight">
                        {activeLog?.title}
                    </h2>
                    <button
                        onClick={() => navigator.clipboard.writeText(activeLog?.title || "")}
                        className="text-xs border border-gray-800 px-3 py-1 rounded hover:bg-white hover:text-black transition-colors"
                    >
                        copy ascii
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar relative">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={selectedLogId}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="h-full"
                        >
                            {activeLog?.content}
                        </motion.div>
                    </AnimatePresence>

                    {/* Scanline effect */}
                    <div className="pointer-events-none absolute inset-0 bg-repeat-y opacity-5"
                        style={{ backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(255, 255, 255, 0.1) 50%)', backgroundSize: '100% 4px' }}>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #333;
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
                
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default Backroom;
