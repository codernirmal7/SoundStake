import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wallet } from 'lucide-react';

interface NavbarProps {
    onConnectWallet: () => void;
}

const navLinks = [
    { label: 'Campaigns', href: '#campaigns' },
    { label: 'Artists', href: '#artists' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Docs', href: '#docs' },
];

export default function Navbar({ onConnectWallet }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (href: string) => {
        setActiveLink(href);
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Main Navbar - Changes style based on scroll */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? 'py-3'
                        : 'py-4 md:py-6'
                    }`}
            >
                <div className={`mx-auto transition-all duration-500 ${isScrolled
                        ? 'max-w-full px-4'
                        : 'max-w-7xl px-4 sm:px-6 lg:px-8'
                    }`}>
                    <div
                        className={`flex items-center justify-between transition-all duration-500 ${isScrolled
                                ? 'glass rounded-full px-4 sm:px-6 py-2.5 border border-violet-primary/20 shadow-navbar'
                                : 'bg-transparent px-0 py-0'
                            }`}
                    >
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-1 shrink-0">
                            <span className="text-base sm:text-lg font-bold text-text-primary">Sound</span>
                            <span className="text-base sm:text-lg font-bold text-violet-primary">Stake</span>
                            <span className="text-violet-primary text-xs sm:text-sm ml-0.5">♪</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => handleLinkClick(link.href)}
                                    className="relative text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 py-1 whitespace-nowrap"
                                >
                                    {link.label}
                                    {activeLink === link.href && (
                                        <motion.span
                                            layoutId="navIndicator"
                                            className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-primary"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Connect Wallet Button - Desktop */}
                        <button
                            onClick={onConnectWallet}
                            className="hidden md:flex items-center gap-2 bg-violet-primary hover:bg-violet-glow text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-violet-glow whitespace-nowrap"
                        >
                            <Wallet className="w-4 h-4" />
                            <span>Connect Wallet</span>
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-violet-primary/10"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Full Width */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-bg-base/80 backdrop-blur-md z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed top-16 left-0 right-0 z-50 md:hidden px-4"
                        >
                            <div className="glass rounded-2xl p-4 border border-violet-primary/20 shadow-2xl">
                                <div className="flex flex-col gap-1">
                                    {navLinks.map((link, index) => (
                                        <motion.button
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            onClick={() => handleLinkClick(link.href)}
                                            className="text-left text-text-secondary hover:text-text-primary py-3.5 px-4 rounded-xl hover:bg-violet-primary/10 transition-all duration-200 text-base"
                                        >
                                            {link.label}
                                        </motion.button>
                                    ))}
                                    <motion.button
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            onConnectWallet();
                                        }}
                                        className="flex items-center justify-center gap-2 bg-violet-primary hover:bg-violet-glow text-white font-semibold py-4 px-4 rounded-xl mt-3 transition-all duration-300"
                                    >
                                        <Wallet className="w-4 h-4" />
                                        <span>Connect Wallet</span>
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
