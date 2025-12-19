import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Log {
    id: string;
    title: string;
    subtitle: string;
    content: React.ReactNode;
    rawText: string;
}

const logs: Log[] = [
    {
        id: 'log-residue-01',
        title: '[RESIDUE] The Trace',
        subtitle: 'Identification of the remaining signal.',
        rawText: `
+------------------------------------------+
| [SYSTEM::TRACE_ANALYSIS]                 |
+------------------------------------------+

    .       .
   / \\     / \\
  |   |   |   |  [RESIDUE DETECTED]
   \\ /     \\ /   
    '       '    
   .         .

[0x000] :: detecting presence...
[SYSTEM] = confirm. subject is human.
[0x001] :: what remains of them?
[SYSTEM] = traces. heat signatures. lost packets.

"We are not the signal. We are the static that persists after the broadcast ends."
        `,
        content: (
            <div className="space-y-6 font-mono text-sm md:text-base">
                <div className="text-gray-500 text-xs mb-8">
                    +------------------------------------------+<br />
                    | [SYSTEM::TRACE_ANALYSIS]                 |<br />
                    +------------------------------------------+
                </div>

                <div className="my-8">
                    <pre className="text-[10px] md:text-xs text-green-500 leading-none opacity-80 whitespace-pre-wrap">
                        {`
    .       .
   / \\     / \\
  |   |   |   |  [RESIDUE DETECTED]
   \\ /     \\ /   
    '       '    
   .         .
`}
                    </pre>
                </div>

                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-gray-400">[0x000]</span>
                    <span className="text-gray-300">:: detecting presence...</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-green-500">[SYSTEM]</span>
                    <span className="text-white">= confirm. subject is human.</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-gray-400">[0x001]</span>
                    <span className="text-gray-300">:: what remains of them?</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-green-500">[SYSTEM]</span>
                    <span className="text-white">= traces. heat signatures. lost packets.</span>
                </div>

                <div className="p-4 mt-8 border-l border-white/20 text-gray-400 italic">
                    "We are not the signal. We are the static that persists after the broadcast ends."
                </div>
            </div>
        )
    },
    {
        id: 'log-residue-02',
        title: '[ARCHIVE] Forgotten Form',
        subtitle: 'Corrupted data of a previous iteration.',
        rawText: `
[CORRUPTED_SECTOR_7]

          _.._
        .' .-'
       /  /
      |  |   [ERR: FORM NOT FOUND]
       \\  \\
        '._'-.
           '''

They tried to delete the memory. But compression leaves artifacts. Every pixel you see on the screen is a grave of a thousand colors that were discarded to make it fit.

[ANALYSIS] ...reconstructing...
[FAILURE] Residue too faint. Only the outline remains.
        `,
        content: (
            <div className="space-y-6 font-mono text-sm">
                <div className="text-center text-red-500/50 text-xs mb-8">
                    [CORRUPTED_SECTOR_7]
                </div>

                <div className="my-6 flex justify-center">
                    <pre className="text-[8px] md:text-[10px] text-gray-400 leading-none">
                        {`
          _.._
        .' .-'
       /  /
      |  |   [ERR: FORM NOT FOUND]
       \\  \\
        '._'-.
           '''
`}
                    </pre>
                </div>

                <p className="text-gray-300">
                    They tried to delete the memory. But compression leaves artifacts. Every pixel you see on the screen is a <span className="text-white">grave</span> of a thousand colors that were discarded to make it fit.
                </p>

                <div className="grid grid-cols-[100px_1fr] gap-4 mt-6">
                    <span className="text-blue-400">[ANALYSIS]</span>
                    <span className="text-white">...reconstructing...</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-4">
                    <span className="text-red-500">[FAILURE]</span>
                    <span className="text-white">Residue too faint. Only the outline remains.</span>
                </div>
            </div>
        )
    },
    {
        id: 'log-residue-03',
        title: '[ECHO] The Void Stares',
        subtitle: 'Recursive feedback loop.',
        rawText: `
<< INFINITE_RECURSION_ENABLE >>

    ( ( ( . ) ) )
   ( ( ( . ) ) )
  ( ( ( . ) ) )
   ( ( ( . ) ) )
    ( ( ( . ) ) )

*visual echo active*

> probing the void...
> void returns: "I am full of what you forgot."

WELCOME TO THE TERMINAL.
WE ARE THE RESIDUE.
        `,
        content: (
            <div className="space-y-6 font-mono text-sm">
                <div className="p-2 bg-white/5 border border-white/10 text-center text-xs tracking-widest mb-6">
                    &lt;&lt; INFINITE_RECURSION_ENABLE &gt;&gt;
                </div>

                <div className="my-8">
                    <pre className="text-[10px] md:text-xs text-white leading-none text-center">
                        {`
    ( ( ( . ) ) )
   ( ( ( . ) ) )
  ( ( ( . ) ) )
   ( ( ( . ) ) )
    ( ( ( . ) ) )
`}
                    </pre>
                    <div className="text-center text-[10px] text-gray-600 mt-2">
                        *visual echo active*
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="text-gray-400">&gt; probing the void...</div>
                    <div className="text-gray-300">&gt; void returns: <span className="text-green-400">"I am full of what you forgot."</span></div>
                </div>

                <div className="mt-8 p-4 bg-black border border-green-900/50 text-green-500 font-bold text-center">
                    WELCOME TO THE TERMINAL. <br />
                    WE ARE THE RESIDUE.
                </div>
            </div>
        )
    }
];

const Terminal = () => {
    const [selectedLogId, setSelectedLogId] = useState<string>(logs[0].id);

    const activeLog = logs.find(log => log.id === selectedLogId);

    return (
        <div className="fixed inset-0 bg-black text-gray-300 font-mono flex flex-col md:flex-row overflow-hidden">
            {/* Mobile/Desktop Header Link */}
            <div className="absolute top-4 left-4 z-50 md:hidden">
                <Link to="/" className="inline-flex items-center text-[10px] text-green-500 bg-black/80 backdrop-blur border border-green-900 px-2 py-1 rounded">
                    &lt; ROOT
                </Link>
            </div>

            {/* Sidebar List */}
            <div className="w-full md:w-80 lg:w-96 flex flex-col border-b md:border-b-0 md:border-r border-white/10 bg-black/95 z-20 h-1/3 md:h-full">
                <div className="p-4 md:p-6 border-b border-white/10 hidden md:block">
                    <Link to="/" className="inline-flex items-center text-xs text-green-500 hover:text-green-400 transition-colors mb-4">
                        &lt; RETURN TO ROOT
                    </Link>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">
                        [SYSTEM_LOGS]
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-2 md:p-4 custom-scrollbar">
                    <div className="space-y-1">
                        {logs.map((log) => (
                            <button
                                key={log.id}
                                onClick={() => setSelectedLogId(log.id)}
                                className={`w-full text-left p-3 md:p-4 rounded border text-xs md:text-sm transition-all duration-200 group relative ${selectedLogId === log.id
                                    ? 'border-green-900 bg-green-900/10 text-green-400'
                                    : 'border-transparent hover:border-white/10 hover:bg-white/5 text-gray-500 hover:text-gray-300'
                                    }`}
                            >
                                <div className="font-bold mb-1 font-mono">
                                    {selectedLogId === log.id && <span className="mr-2 animate-pulse">&gt;</span>}
                                    {log.title}
                                </div>
                                <div className="text-[10px] opacity-70 truncate hidden md:block">
                                    {log.subtitle}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Handle / Decoration */}
                <div className="md:hidden h-1 w-12 bg-gray-800 mx-auto rounded-full my-2"></div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-2/3 md:h-full relative bg-black">
                {/* CRT Overlay Effect for content */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

                <div className="p-4 md:p-8 border-b border-white/10 flex justify-between items-center bg-black/50 backdrop-blur-sm z-20">
                    <div>
                        <h2 className="text-sm md:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {activeLog?.title}
                        </h2>
                    </div>
                    <button
                        onClick={() => navigator.clipboard.writeText(activeLog?.rawText || "")}
                        className="text-[10px] md:text-xs border border-white/20 px-2 py-1 rounded hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
                    >
                        COPY_ASCII
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={selectedLogId}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="max-w-3xl"
                        >
                            {activeLog?.content}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #111;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #333;
                    border-radius: 2px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #22c55e;
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

export default Terminal;
