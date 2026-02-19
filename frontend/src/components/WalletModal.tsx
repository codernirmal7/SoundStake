import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Shield, Sparkles } from 'lucide-react';

interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const wallets = [
    {
        id: 'phantom',
        name: 'Phantom',
        description: 'Most popular Solana wallet',
        icon: (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
            </div>
        ),
        recommended: true,
    },
    {
        id: 'solflare',
        name: 'Solflare',
        description: 'Full-featured Solana wallet',
        icon: (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        ),
        recommended: false,
    },
    {
        id: 'backpack',
        name: 'Backpack',
        description: 'xNFT-enabled wallet',
        icon: (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
            </div>
        ),
        recommended: false,
    },
    {
        id: 'torus',
        name: 'Torus',
        description: 'Social login wallet',
        icon: (
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            </div>
        ),
        recommended: false,
    },
];

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);

    const handleConnect = (walletId: string) => {
        setSelectedWallet(walletId);
        setIsConnecting(true);
        setTimeout(() => {
            setIsConnecting(false);
            onClose();
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-bg-base/80 backdrop-blur-md z-50"
                        onClick={onClose}
                    />

                    {/* Modal - Centered */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full max-w-md"
                        >
                            <div className="bg-bg-surface border border-violet-primary/20 rounded-3xl overflow-hidden shadow-2xl shadow-violet-primary/10">
                                {/* Header */}
                                <div className="relative p-6 border-b border-bg-border">
                                    {/* Decorative glow */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-violet-primary/20 rounded-full blur-3xl pointer-events-none" />

                                    <div className="relative flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                                                Connect Wallet
                                                <Sparkles className="w-5 h-5 text-gold-primary" />
                                            </h2>
                                            <p className="text-text-secondary text-sm mt-1">
                                                Choose your preferred wallet
                                            </p>
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="p-2 rounded-full hover:bg-bg-elevated transition-colors"
                                        >
                                            <X className="w-5 h-5 text-text-secondary" />
                                        </button>
                                    </div>
                                </div>

                                {/* Wallet List */}
                                <div className="p-4 space-y-2">
                                    {wallets.map((wallet) => (
                                        <motion.button
                                            key={wallet.id}
                                            onClick={() => handleConnect(wallet.id)}
                                            disabled={isConnecting}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group ${selectedWallet === wallet.id
                                                    ? 'bg-violet-primary/10 border-violet-primary/40'
                                                    : 'bg-bg-elevated/50 border-bg-border hover:border-violet-primary/30 hover:bg-bg-elevated'
                                                }`}
                                        >
                                            {wallet.icon}

                                            <div className="flex-1 text-left">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-text-primary">
                                                        {wallet.name}
                                                    </span>
                                                    {wallet.recommended && (
                                                        <span className="px-2 py-0.5 bg-gold-primary/20 text-gold-primary text-xs rounded-full font-medium">
                                                            Recommended
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="text-text-tertiary text-sm">
                                                    {wallet.description}
                                                </p>
                                            </div>

                                            {selectedWallet === wallet.id && isConnecting ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="w-5 h-5 border-2 border-violet-primary border-t-transparent rounded-full"
                                                />
                                            ) : (
                                                <ChevronRight className="w-5 h-5 text-text-tertiary group-hover:text-violet-glow transition-colors" />
                                            )}
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="p-4 bg-bg-elevated/30 border-t border-bg-border">
                                    <div className="flex items-start gap-3 text-xs text-text-tertiary">
                                        <Shield className="w-4 h-4 text-violet-glow shrink-0 mt-0.5" />
                                        <p>
                                            Your wallet connection is secure and encrypted. We never store your private keys.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
