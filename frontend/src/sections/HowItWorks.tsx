import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Wallet, Coins } from 'lucide-react';
import TextureOverlay, { GlowOrb } from '../components/TextureOverlay';
import SectionSeparator from '../components/SectionSeparator';

const steps = [
    {
        number: '01',
        title: 'Artist Posts the Concept',
        description: 'Upload a 30-second demo. Set your funding goal. Define the royalty percentage you\'ll offer backers. Your campaign goes live on Solana instantly.',
        icon: Upload,
        mockUI: 'createForm',
    },
    {
        number: '02',
        title: 'Fans Stake SOL',
        description: 'Back artists you believe in before the song exists. Your stake is locked until the milestone is hit. A non-transferable soul-bound fan token is minted to your wallet — proof of belief.',
        icon: Wallet,
        mockUI: 'stakeTransaction',
    },
    {
        number: '03',
        title: 'Royalties Flow Back, On-Chain, Forever',
        description: 'Song ships and hits its stream milestone. The Anchor royalty splitter activates. Streaming revenue auto-distributes proportionally to all token holders — forever.',
        icon: Coins,
        mockUI: 'royaltyDistribution',
    },
];

// Mock UI Components
function CreateFormMock() {
    return (
        <div className="bg-bg-elevated/80 backdrop-blur-sm rounded-xl p-4 border border-bg-border">
            <div className="space-y-3">
                <div>
                    <label className="text-text-tertiary text-xs mb-1 block">Song Title</label>
                    <div className="h-8 bg-bg-base rounded-lg border border-bg-border px-3 flex items-center text-text-secondary text-sm">
                        Bāris Paryo
                    </div>
                </div>
                <div>
                    <label className="text-text-tertiary text-xs mb-1 block">Funding Goal (SOL)</label>
                    <div className="h-8 bg-bg-base rounded-lg border border-bg-border px-3 flex items-center text-text-secondary text-sm font-mono">
                        20
                    </div>
                </div>
                <div>
                    <label className="text-text-tertiary text-xs mb-1 block">Royalty Share %</label>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-bg-base rounded-full overflow-hidden">
                            <div className="w-3/5 h-full bg-violet-gold-gradient rounded-full" />
                        </div>
                        <span className="text-gold-primary text-sm font-mono">12%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StakeTransactionMock() {
    return (
        <div className="bg-bg-elevated/80 backdrop-blur-sm rounded-xl p-4 border border-bg-border">
            <div className="flex items-center justify-between mb-3">
                <span className="text-text-tertiary text-xs">Staking</span>
                <span className="text-violet-glow text-sm font-mono font-semibold">2.5 SOL</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-violet-primary/20 flex items-center justify-center">
                    <Wallet className="w-3 h-3 text-violet-glow" />
                </div>
                <span className="text-text-secondary text-xs font-mono truncate">
                    7xK3...mP9q
                </span>
            </div>
            <div className="flex items-center gap-2">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-violet-primary border-t-transparent rounded-full"
                />
                <span className="text-violet-glow text-xs">Minting fan token...</span>
            </div>
        </div>
    );
}

function RoyaltyDistributionMock() {
    const recipients = [
        { address: '7xK3...mP9q', amount: '0.043' },
        { address: '9aB2...nQ8r', amount: '0.031' },
        { address: '3cD5...oS7t', amount: '0.028' },
    ];

    return (
        <div className="bg-bg-elevated/80 backdrop-blur-sm rounded-xl p-4 border border-bg-border">
            <p className="text-text-tertiary text-xs mb-3">Royalty Distribution</p>
            <div className="space-y-2">
                {recipients.map((recipient, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                    >
                        <span className="text-text-secondary text-xs font-mono">{recipient.address}</span>
                        <span className="text-green-live text-xs font-mono flex items-center gap-1">
                            <span className="text-[10px]">Received</span>
                            <span>◎{recipient.amount}</span>
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function MockUI({ type }: { type: string }) {
    switch (type) {
        case 'createForm':
            return <CreateFormMock />;
        case 'stakeTransaction':
            return <StakeTransactionMock />;
        case 'royaltyDistribution':
            return <RoyaltyDistributionMock />;
        default:
            return null;
    }
}

export default function HowItWorks() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id="how-it-works" ref={sectionRef} className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-base via-bg-surface to-bg-base opacity-50" />
            <GlowOrb color="violet" size={500} position={{ x: '20%', y: '30%' }} />
            <TextureOverlay variant="mesh" intensity="subtle" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-label text-violet-glow mb-4 block">The Mechanism</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
                        A new music economy, in three moves.
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line - Hidden on mobile */}
                    <div className="hidden md:block absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-primary via-violet-glow to-gold-primary" />

                    {/* Steps */}
                    <div className="space-y-12 sm:space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative grid md:grid-cols-[80px_1fr_280px] gap-4 sm:gap-6 md:gap-8 items-start"
                            >
                                {/* Step Number Node */}
                                <div className="relative z-10 flex md:block items-center gap-4">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg-elevated border-2 border-violet-primary flex items-center justify-center shrink-0">
                                        <span className="text-violet-glow font-mono text-sm md:text-base font-semibold">
                                            {step.number}
                                        </span>
                                    </div>
                                    {/* Mobile connector line */}
                                    {index < steps.length - 1 && (
                                        <div className="md:hidden flex-1 h-0.5 bg-gradient-to-r from-violet-primary to-violet-glow" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pt-0 md:pt-2">
                                    <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed max-w-md text-sm sm:text-base">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Mock UI */}
                                <div className="hidden md:block pt-2">
                                    <MockUI type={step.mockUI} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <SectionSeparator variant="gradient" />
            </div>
        </section>
    );
}
