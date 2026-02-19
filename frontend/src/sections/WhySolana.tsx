import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Globe, Coins, Clock, Lock } from 'lucide-react';
import TextureOverlay, { GlowOrb } from '../components/TextureOverlay';

const features = [
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: '65,000+ transactions per second. Your campaign goes live in seconds, not hours.',
        stat: '< 400ms',
        statLabel: 'Transaction time',
    },
    {
        icon: Coins,
        title: 'Near Zero Fees',
        description: 'Stake SOL for less than a cent. More value goes to artists, not gas fees.',
        stat: '$0.00025',
        statLabel: 'Avg fee',
    },
    {
        icon: Shield,
        title: 'Battle Tested',
        description: 'Solana has processed billions of transactions. Your funds are secure.',
        stat: '100B+',
        statLabel: 'Transactions',
    },
    {
        icon: Globe,
        title: 'Global Access',
        description: 'Anyone with internet can participate. No banks, no borders, no barriers.',
        stat: '200+',
        statLabel: 'Countries',
    },
    {
        icon: Clock,
        title: '24/7 Uptime',
        description: 'The network never sleeps. Royalties distribute automatically, day or night.',
        stat: '99.9%',
        statLabel: 'Uptime',
    },
    {
        icon: Lock,
        title: 'Non-Custodial',
        description: 'You control your wallet. We never hold your private keys or funds.',
        stat: '100%',
        statLabel: 'Self-custody',
    },
];

export default function WhySolana() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <GlowOrb color="violet" size={600} position={{ x: '50%', y: '50%' }} />
            <TextureOverlay variant="grid" intensity="subtle" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <span className="text-label text-violet-glow mb-4 block">Why Solana</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6">
                        Built on the Fastest<br className="hidden sm:block" /> Blockchain
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Solana's high-speed, low-cost infrastructure makes SoundStake possible. No compromises on speed, security, or cost.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                                className="group relative bg-bg-surface/60 backdrop-blur-sm rounded-2xl p-6 border border-bg-border hover:border-violet-primary/30 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-violet-primary/10 flex items-center justify-center group-hover:bg-violet-primary/20 transition-colors">
                                            <Icon className="w-6 h-6 text-violet-glow" />
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold text-violet-primary font-mono">
                                                {feature.stat}
                                            </p>
                                            <p className="text-xs text-text-tertiary">{feature.statLabel}</p>
                                        </div>
                                    </div>

                                    <h3 className="text-text-primary font-semibold text-lg mb-2">
                                        {feature.title}
                                    </h3>

                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 sm:mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-bg-surface/60 backdrop-blur-sm rounded-full border border-violet-primary/20">
                        <span className="text-text-secondary text-sm">Powered by</span>
                        <span className="text-violet-glow font-semibold">Solana</span>
                        <span className="w-px h-4 bg-bg-border" />
                        <span className="text-text-secondary text-sm">Built with</span>
                        <span className="text-violet-glow font-semibold">Anchor</span>
                        <span className="w-px h-4 bg-bg-border" />
                        <span className="text-text-secondary text-sm">Tokens by</span>
                        <span className="text-violet-glow font-semibold">Metaplex</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
