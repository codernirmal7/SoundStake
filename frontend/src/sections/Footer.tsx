import { Twitter, Github, MessageCircle, Mail } from 'lucide-react';
import TextureOverlay from '../components/TextureOverlay';
import SectionSeparator from '../components/SectionSeparator';

const footerLinks = {
    Product: [
        { label: 'Campaigns', href: '#campaigns' },
        { label: 'Artists', href: '#artists' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Pricing', href: '#' },
    ],
    Resources: [
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'Status', href: '#' },
    ],
    Company: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
    ],
    Legal: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookie Policy', href: '#' },
    ],
};

const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Mail, href: '#', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="relative pt-16 sm:pt-20 pb-6 sm:pb-8 overflow-hidden">
            {/* Section Separator */}
            <div className="absolute top-0 left-0 right-0">
                <SectionSeparator variant="gradient" />
            </div>

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-bg-base" />
            <TextureOverlay variant="noise" intensity="subtle" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2">
                        <a href="#" className="flex items-center gap-1 mb-3 sm:mb-4">
                            <span className="text-lg sm:text-xl font-bold text-text-primary">Sound</span>
                            <span className="text-lg sm:text-xl font-bold text-violet-primary">Stake</span>
                            <span className="text-violet-primary text-sm ml-0.5">♪</span>
                        </a>
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs">
                            Fund the song. Own the royalties. The future of music financing on Solana.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-2 sm:gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-bg-elevated border border-bg-border flex items-center justify-center text-text-secondary hover:text-violet-glow hover:border-violet-primary/30 transition-all duration-200"
                                >
                                    <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-text-primary font-semibold text-sm mb-3 sm:mb-4">{category}</h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-text-secondary text-xs sm:text-sm hover:text-violet-glow transition-colors duration-200"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 sm:pt-8 border-t border-bg-border">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                        <p className="text-text-tertiary text-xs text-center sm:text-left">
                            © 2026 SoundStake. Built on Solana.
                        </p>
                        <div className="flex items-center gap-2 text-text-tertiary text-xs">
                            <span className="w-2 h-2 rounded-full bg-green-live animate-pulse" />
                            <span>All systems operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
