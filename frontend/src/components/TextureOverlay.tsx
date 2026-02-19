interface TextureOverlayProps {
    variant?: 'noise' | 'grid' | 'dots' | 'mesh' | 'aurora';
    intensity?: 'subtle' | 'light' | 'medium' | 'strong';
    className?: string;
}

export default function TextureOverlay({
    variant = 'noise',
    intensity = 'subtle',
    className = ''
}: TextureOverlayProps) {
    const intensityMap = {
        subtle: '0.02',
        light: '0.04',
        medium: '0.06',
        strong: '0.1',
    };

    const opacities = {
        noise: intensityMap[intensity],
        grid: intensityMap[intensity],
        dots: intensityMap[intensity],
        mesh: intensityMap[intensity],
        aurora: '0.15',
    };

    if (variant === 'aurora') {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(124, 58, 237, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 50% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
            `,
                    }}
                />
            </div>
        );
    }

    if (variant === 'noise') {
        return (
            <div
                className={`absolute inset-0 pointer-events-none ${className}`}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    opacity: opacities[variant],
                    mixBlendMode: 'overlay',
                }}
            />
        );
    }

    if (variant === 'grid') {
        return (
            <div
                className={`absolute inset-0 pointer-events-none ${className}`}
                style={{
                    backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(124, 58, 237, ${opacities[variant]}) 60px,
              rgba(124, 58, 237, ${opacities[variant]}) 61px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(124, 58, 237, ${opacities[variant]}) 60px,
              rgba(124, 58, 237, ${opacities[variant]}) 61px
            )
          `,
                }}
            />
        );
    }

    if (variant === 'dots') {
        return (
            <div
                className={`absolute inset-0 pointer-events-none ${className}`}
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(124, 58, 237, ${opacities[variant]}) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                }}
            />
        );
    }

    if (variant === 'mesh') {
        return (
            <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="meshPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path
                                d="M0 50 Q25 25 50 50 T100 50"
                                stroke="rgba(124, 58, 237, 0.1)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                            <path
                                d="M0 0 Q25 25 50 0 T100 0"
                                stroke="rgba(124, 58, 237, 0.05)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                            <path
                                d="M0 100 Q25 75 50 100 T100 100"
                                stroke="rgba(124, 58, 237, 0.05)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#meshPattern)" />
                </svg>
            </div>
        );
    }

    return null;
}

// Glow orb component for ambient lighting effects
export function GlowOrb({
    color = 'violet',
    size = 400,
    position = { x: '50%', y: '50%' },
    className = ''
}: {
    color?: 'violet' | 'gold' | 'mixed';
    size?: number;
    position?: { x: string; y: string };
    className?: string;
}) {
    const colors = {
        violet: 'rgba(124, 58, 237, 0.15)',
        gold: 'rgba(245, 158, 11, 0.1)',
        mixed: 'rgba(139, 92, 246, 0.12)',
    };

    return (
        <div
            className={`absolute pointer-events-none ${className}`}
            style={{
                left: position.x,
                top: position.y,
                width: size,
                height: size,
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, ${colors[color]} 0%, transparent 70%)`,
                filter: 'blur(40px)',
            }}
        />
    );
}

// Scanline effect for retro-futuristic feel
export function Scanlines({ className = '' }: { className?: string }) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none opacity-[0.03] ${className}`}
            style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
            }}
        />
    );
}
