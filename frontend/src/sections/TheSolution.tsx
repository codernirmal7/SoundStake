import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Shield, Zap, Heart, TrendingUp } from 'lucide-react';
import TextureOverlay, { GlowOrb } from '../components/TextureOverlay';

const solutions = [
    {
        icon: Zap,
        title: 'Direct Funding',
        description: 'Artists set their own goals. Fans stake SOL directly to the campaign. No middlemen.',
    },
    {
        icon: Heart,
        title: 'Fan Ownership',
        description: 'Backers receive soul-bound fan tokens and a share of future royalties. Forever.',
    },
    {
        icon: Shield,
        title: 'On-Chain Security',
        description: 'Smart contracts lock funds until milestones are met. Transparent and trustless.',
    },
    {
        icon: TrendingUp,
        title: 'Fair Economics',
        description: 'Artists keep 88%+ of revenue. Fans earn yield from music they helped create.',
    },
];

export default function TheSolution() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <GlowOrb color="violet" size={600} position={{ x: '70%', y: '40%' }} />
            <GlowOrb color="gold" size={400} position={{ x: '30%', y: '80%' }} />
            <TextureOverlay variant="mesh" intensity="subtle" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-label text-green-live mb-4 block">The Solution</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6">
                            A New Music Economy Built on Solana
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed mb-8">
                            SoundStake flips the script. Artists post their vision. Fans stake SOL to bring it to life. When the song ships, royalties flow back to the believers — on-chain, transparent, forever.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group flex items-center justify-center sm:justify-start gap-2 bg-violet-primary hover:bg-violet-glow text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-violet-glow">
                                <span>Explore Campaigns</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center justify-center sm:justify-start gap-2 border border-violet-primary/30 text-text-primary font-semibold px-6 py-3.5 rounded-full hover:bg-violet-primary/10 transition-all duration-300">
                                <span>Learn More</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right - Solution Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {solutions.map((solution, index) => {
                            const Icon = solution.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="group relative bg-bg-surface/60 backdrop-blur-sm rounded-2xl p-6 border border-bg-border hover:border-violet-primary/30 transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-xl bg-violet-primary/10 flex items-center justify-center mb-4 group-hover:bg-violet-primary/20 transition-colors">
                                            <Icon className="w-6 h-6 text-violet-glow" />
                                        </div>

                                        <h3 className="text-text-primary font-semibold mb-2">
                                            {solution.title}
                                        </h3>

                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {solution.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
                >
                    {[
                        { value: '◎ 1,247', label: 'SOL Staked' },
                        { value: '43', label: 'Campaigns Funded' },
                        { value: '2,891', label: 'Fan Investors' },
                        { value: '12%', label: 'Avg Royalty Share' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="text-2xl sm:text-3xl font-bold text-violet-primary font-mono mb-1">
                                {stat.value}
                            </p>
                            <p className="text-text-secondary text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
