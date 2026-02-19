import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music, DollarSign, Users, Radio } from 'lucide-react';
import TextureOverlay, { GlowOrb } from '../components/TextureOverlay';

const problems = [
    {
        icon: DollarSign,
        stat: '70-80%',
        title: 'Labels Take the Majority',
        description: 'Traditional record labels claim most of the revenue, leaving artists with crumbs.',
    },
    {
        icon: Radio,
        stat: '$0.003',
        title: 'Streaming Pays Pennies',
        description: 'Per stream payout is less than a fraction of a cent on major platforms.',
    },
    {
        icon: Users,
        stat: '1000s',
        title: 'Nepali Artists Struggle',
        description: 'Talented indie artists in Nepal lack upfront funding to produce quality music.',
    },
    {
        icon: Music,
        stat: 'Zero',
        title: 'Fans Cannot Invest',
        description: 'Listeners can only stream — they cannot support artists they believe in.',
    },
];

export default function TheProblem() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <GlowOrb color="violet" size={500} position={{ x: '20%', y: '30%' }} />
            <GlowOrb color="gold" size={400} position={{ x: '80%', y: '70%' }} />
            <TextureOverlay variant="noise" intensity="subtle" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <span className="text-label text-red-400 mb-4 block">The Problem</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6">
                        Music Is Broken for<br className="hidden sm:block" /> Independent Artists
                    </h2>
                </motion.div>

                {/* Story Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-4xl mx-auto mb-16 sm:mb-20"
                >
                    <div className="relative bg-gradient-to-br from-bg-surface/80 to-bg-elevated/80 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-red-500/20 overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                                    <span className="text-2xl">🇳🇵</span>
                                </div>
                                <div>
                                    <p className="text-text-primary font-semibold">Meet Roshan</p>
                                    <p className="text-text-tertiary text-sm">Indie Folk Artist from Kathmandu</p>
                                </div>
                            </div>

                            <blockquote className="text-lg sm:text-xl lg:text-2xl text-text-secondary leading-relaxed italic mb-6">
                                "I have songs that people want to hear. I have fans who believe in my music. But I spend more time worrying about rent than recording. My last track took 8 months to produce because I couldn't afford studio time. The system wasn't built for artists like me."
                            </blockquote>

                            <div className="flex items-center gap-4 text-sm text-text-tertiary">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                                    2,400+ artists face this daily in Nepal
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Problem Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="group relative bg-bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-bg-border hover:border-red-500/30 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                                        <Icon className="w-5 h-5 text-red-400" />
                                    </div>

                                    <p className="text-2xl sm:text-3xl font-bold text-red-400 mb-2 font-mono">
                                        {problem.stat}
                                    </p>

                                    <h3 className="text-text-primary font-semibold mb-2">
                                        {problem.title}
                                    </h3>

                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
