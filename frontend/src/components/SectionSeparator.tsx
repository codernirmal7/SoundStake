import { motion } from 'framer-motion';

interface SectionSeparatorProps {
    variant?: 'gradient' | 'glow' | 'line' | 'dots' | 'wave';
    className?: string;
}

export default function SectionSeparator({ variant = 'gradient', className = '' }: SectionSeparatorProps) {
    if (variant === 'gradient') {
        return (
            <div className={`relative h-px w-full overflow-hidden ${className}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-primary/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent animate-pulse" />
            </div>
        );
    }

    if (variant === 'glow') {
        return (
            <div className={`relative py-8 ${className}`}>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-primary/20 rounded-full blur-3xl" />
                <div className="relative flex items-center justify-center gap-4">
                    <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-violet-primary/30" />
                    <div className="w-2 h-2 rounded-full bg-violet-primary animate-pulse" />
                    <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-violet-primary/30" />
                </div>
            </div>
        );
    }

    if (variant === 'line') {
        return (
            <div className={`relative py-6 ${className}`}>
                <div className="h-px w-full bg-bg-border" />
            </div>
        );
    }

    if (variant === 'dots') {
        return (
            <div className={`relative py-8 ${className}`}>
                <div className="flex items-center justify-center gap-2">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 rounded-full bg-violet-primary/50"
                        />
                    ))}
                </div>
            </div>
        );
    }

    if (variant === 'wave') {
        return (
            <div className={`relative overflow-hidden ${className}`}>
                <svg
                    viewBox="0 0 1440 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30"
                        stroke="url(#waveGradient)"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                        fill="none"
                    />
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7C3AED" />
                            <stop offset="50%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#7C3AED" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        );
    }

    return null;
}
