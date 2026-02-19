import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Upload, Target, Percent, Rocket, Check } from 'lucide-react';
import TextureOverlay, { GlowOrb } from '../components/TextureOverlay';

const steps = [
    {
        number: '01',
        icon: Upload,
        title: 'Upload Your Demo',
        description: 'Share a 30-second preview of your upcoming track. Let fans hear your vision.',
        checks: ['Audio file (MP3/WAV)', 'Cover artwork', 'Song description'],
    },
    {
        number: '02',
        icon: Target,
        title: 'Set Your Goal',
        description: 'Define how much SOL you need to complete your song. Be transparent about costs.',
        checks: ['Studio time', 'Mixing & mastering', 'Distribution costs'],
    },
    {
        number: '03',
        icon: Percent,
        title: 'Offer Royalties',
        description: 'Decide what percentage of future royalties you will share with your backers.',
        checks: ['Typically 8-15%', 'Higher % = more backers', 'Fair to you and fans'],
    },
    {
        number: '04',
        icon: Rocket,
        title: 'Go Live',
        description: 'Your campaign launches instantly on Solana. Share it with your community.',
        checks: ['Social media ready', 'Campaign link', 'Real-time tracking'],
    },
];

export default function ArtistCreatesCampaign() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section id="artists" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <GlowOrb color="gold" size={500} position={{ x: '80%', y: '30%' }} />
            <GlowOrb color="violet" size={400} position={{ x: '20%', y: '70%' }} />
            <TextureOverlay variant="dots" intensity="subtle" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <span className="text-label text-gold-primary mb-4 block">For Artists</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6">
                        Launch Your Campaign<br className="hidden sm:block" /> in 4 Simple Steps
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        No paperwork. No gatekeepers. Just your music, your terms, and fans who believe in you.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                className="group relative"
                            >
                                {/* Connector line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-violet-primary/30 to-violet-primary/10 z-0" />
                                )}

                                <div className="relative bg-bg-surface/60 backdrop-blur-sm rounded-2xl p-6 border border-bg-border hover:border-violet-primary/30 transition-all duration-300 h-full">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative">
                                        {/* Step Number */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-4xl font-bold text-violet-primary/20 font-mono">
                                                {step.number}
                                            </span>
                                            <div className="w-10 h-10 rounded-xl bg-violet-primary/10 flex items-center justify-center group-hover:bg-violet-primary/20 transition-colors">
                                                <Icon className="w-5 h-5 text-violet-glow" />
                                            </div>
                                        </div>

                                        <h3 className="text-text-primary font-semibold text-lg mb-2">
                                            {step.title}
                                        </h3>

                                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                            {step.description}
                                        </p>

                                        {/* Checklist */}
                                        <ul className="space-y-2">
                                            {step.checks.map((check, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs text-text-tertiary">
                                                    <Check className="w-3.5 h-3.5 text-green-live flex-shrink-0" />
                                                    <span>{check}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                >
                    <button className="bg-violet-primary hover:bg-violet-glow text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-violet-glow">
                        Start Your Campaign
                    </button>
                    <p className="text-text-tertiary text-sm mt-4">
                        Free to launch. Only pay when you get funded.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
