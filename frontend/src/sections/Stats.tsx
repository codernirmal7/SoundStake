import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import TextureOverlay from '../components/TextureOverlay';
import SectionSeparator from '../components/SectionSeparator';

interface AnimatedNumberProps {
    value: number;
    prefix?: string;
    suffix?: string;
}

function AnimatedNumber({ value, prefix = '', suffix = '' }: AnimatedNumberProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [hasAnimated, setHasAnimated] = useState(false);

    const springValue = useSpring(0, {
        duration: 2000,
        bounce: 0,
    });

    const displayValue = useTransform(springValue, (latest) => {
        return Math.floor(latest).toLocaleString();
    });

    const [display, setDisplay] = useState('0');

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
            springValue.set(value);
        }
    }, [isInView, hasAnimated, springValue, value]);

    useEffect(() => {
        const unsubscribe = displayValue.on('change', (latest) => {
            setDisplay(latest);
        });
        return unsubscribe;
    }, [displayValue]);

    return (
        <span ref={ref}>
            {prefix}{display}{suffix}
        </span>
    );
}

const stats = [
    {
        value: 1247,
        prefix: '◎ ',
        suffix: '',
        label: 'Staked across campaigns',
        color: 'violet',
    },
    {
        value: 43,
        prefix: '',
        suffix: '',
        label: 'Active Campaigns',
        color: 'gold',
    },
    {
        value: 2891,
        prefix: '',
        suffix: '',
        label: 'Fan Token Holders',
        color: 'violet',
    },
    {
        value: 12,
        prefix: '',
        suffix: '%',
        label: 'Avg. Royalty Offered',
        color: 'gold',
    },
];

export default function Stats() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <section ref={sectionRef} className="relative py-12 sm:py-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-bg-surface border-y border-bg-border" />
            <TextureOverlay variant="noise" intensity="light" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`relative text-center ${index < stats.length - 1 ? 'lg:border-r lg:border-bg-border' : ''
                                } ${index > 0 ? 'lg:px-6 xl:px-12' : ''} ${index === 0 ? 'lg:pr-6 xl:pr-12' : ''}`}
                        >
                            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-1 sm:mb-2 ${stat.color === 'violet' ? 'text-violet-primary' : 'text-gold-primary'
                                }`}>
                                <AnimatedNumber
                                    value={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                />
                            </div>
                            <p className="text-xs sm:text-sm text-text-secondary">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0">
                <SectionSeparator variant="gradient" />
            </div>
        </section>
    );
}
