import { motion } from 'framer-motion';
import { ArrowRight, Music } from 'lucide-react';
import TextureOverlay, { GlowOrb, Scanlines } from '../components/TextureOverlay';
import SectionSeparator from '../components/SectionSeparator';

// Waveform Component with animation
function Waveform() {
    const bars = [
        12, 24, 18, 32, 28, 40, 22, 36, 30, 44, 26, 38, 20, 34, 42, 16, 28, 36, 24, 40,
        18, 32, 38, 14, 30, 22, 44, 28, 36, 20, 34, 26, 40, 16, 32, 24, 38, 30, 42, 18
    ];

    return (
        <div className="flex items-center gap-[2px] sm:gap-[3px] h-8 sm:h-12">
            {bars.map((height, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 4 }}
                    animate={{ height: `${height}px` }}
                    transition={{
                        duration: 0.5,
                        delay: i * 0.02,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        repeatDelay: 0.5
                    }}
                    className={`w-[2px] sm:w-[3px] rounded-none transition-all duration-300 ${i < bars.length * 0.6 ? 'bg-violet-primary' : 'bg-violet-primary/40'
                        }`}
                />
            ))}
        </div>
    );
}

// Live Campaign Card Component
function CampaignCard() {
    return (
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
            className="bg-bg-surface/80 backdrop-blur-xl border border-violet-primary/20 rounded-2xl p-4 sm:p-6 shadow-violet-card relative overflow-hidden"
        >
            {/* Card glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-primary/20 rounded-full blur-3xl pointer-events-none" />

            {/* Artist Info */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-violet-primary to-violet-muted flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                    RK
                </div>
                <div>
                    <p className="text-text-primary font-semibold text-sm">Roshan KC</p>
                    <p className="text-text-tertiary text-xs">Indie Folk · Kathmandu</p>
                </div>
            </div>

            {/* Song Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">Bāris Paryo</h3>
            <span className="inline-block px-3 py-1 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-medium mb-4">
                Upcoming Release
            </span>

            {/* Waveform */}
            <div className="mb-5">
                <Waveform />
            </div>

            {/* Funding Progress */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-text-tertiary text-xs">Campaign Funding</span>
                    <span className="text-gold-primary text-sm font-semibold">73% funded</span>
                </div>
                <div className="h-2 bg-bg-elevated rounded-none overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '73%' }}
                        transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                        className="h-full bg-violet-gold-gradient rounded-none"
                    />
                </div>
                <p className="text-text-secondary text-xs font-mono mt-2">
                    14.6 SOL raised of 20 SOL goal
                </p>
            </div>

            {/* Backers Info */}
            <div className="flex items-center gap-2 text-text-secondary text-xs mb-4">
                <span className="text-gold-primary">◎</span>
                <span>127 backers · 8 days left</span>
            </div>

            {/* Royalty Badge */}
            <div className="inline-block px-3 py-1.5 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-primary text-xs font-medium mb-4">
                12% royalty share offered
            </div>

            {/* Stake Button */}
            <button className="w-full btn-primary py-3 sm:py-3.5">
                <span className="relative z-10">Stake SOL</span>
            </button>

            {/* Token Info */}
            <p className="text-text-tertiary text-xs text-center mt-3">
                Non-transferable fan token · Token-2022
            </p>
        </motion.div>
    );
}

// Avatar Group Component
function AvatarGroup() {
    const avatars = [
        { initials: 'AS', color: 'from-violet-primary to-violet-glow' },
        { initials: 'MK', color: 'from-gold-primary to-gold-light' },
        { initials: 'RJ', color: 'from-green-live to-emerald-400' },
    ];

    return (
        <div className="flex -space-x-2">
            {avatars.map((avatar, i) => (
                <div
                    key={i}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br ${avatar.color} flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold border-2 border-bg-base`}
                >
                    {avatar.initials}
                </div>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 overflow-hidden">
            {/* Background Effects */}
            <GlowOrb color="violet" size={600} position={{ x: '70%', y: '40%' }} />
            <GlowOrb color="gold" size={400} position={{ x: '30%', y: '80%' }} />
            <TextureOverlay variant="noise" intensity="subtle" />
            <TextureOverlay variant="grid" intensity="subtle" />
            <Scanlines />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="order-2 lg:order-1"
                    >
                        {/* Eyebrow Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-violet-primary/10 border border-violet-primary/30 rounded-full mb-6 sm:mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-live animate-pulse-live" />
                            <span className="text-violet-glow text-xs sm:text-sm font-semibold tracking-wide">Solana × Music</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-1 sm:mb-2"
                        >
                            Fund the Song.
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-6 sm:mb-8"
                        >
                            <span className="gradient-text-violet-gold">Own</span> the Royalties.
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-[480px] mb-8 sm:mb-10"
                        >
                            Artists post a concept. Fans stake SOL. The song ships — and royalties flow back to you on-chain. Forever.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
                        >
                            <button className="btn-primary flex items-center justify-center sm:justify-start gap-2">
                                <span>Explore Campaigns</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="btn-secondary flex items-center justify-center sm:justify-start gap-2">
                                <Music className="w-4 h-4" />
                                <span>Launch as Artist</span>
                            </button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex items-center gap-3 sm:gap-4"
                        >
                            <AvatarGroup />
                            <p className="text-sm text-text-secondary">
                                <span className="text-text-primary font-semibold">2,400+</span> fans staking on Solana
                                <span className="text-gold-primary ml-1">◎</span>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Campaign Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="order-1 lg:order-2 lg:pl-4 xl:pl-8"
                    >
                        <CampaignCard />
                    </motion.div>
                </div>
            </div>

            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <SectionSeparator variant="gradient" />
            </div>
        </section>
    );
}
