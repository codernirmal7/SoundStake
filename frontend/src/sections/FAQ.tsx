import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import TextureOverlay, { GlowOrb } from '../components/TextureOverlay';

const faqs = [
    {
        category: 'General',
        questions: [
            {
                q: 'What is SoundStake?',
                a: 'SoundStake is a decentralized platform on Solana where fans can stake SOL to fund music campaigns before songs are created. In return, backers receive soul-bound fan tokens and a share of future streaming royalties.',
            },
            {
                q: 'How does it work?',
                a: 'Artists post a campaign with a demo, funding goal, and royalty percentage. Fans stake SOL to support the campaign. When the goal is reached, the artist creates the song and royalties automatically flow back to backers through smart contracts.',
            },
            {
                q: 'Is SoundStake available worldwide?',
                a: 'Yes! Anyone with a Solana wallet and internet connection can participate. There are no geographical restrictions or banking requirements.',
            },
        ],
    },
    {
        category: 'For Artists',
        questions: [
            {
                q: 'How much does it cost to launch a campaign?',
                a: 'It is completely free to launch a campaign. SoundStake only takes a small fee (3%) when your campaign is successfully funded.',
            },
            {
                q: 'What percentage of royalties should I offer?',
                a: 'Most artists offer between 8-15% of future royalties. Higher percentages typically attract more backers. You can adjust this based on your funding goal and fan base.',
            },
            {
                q: 'What happens if my campaign does not reach the goal?',
                a: 'If your campaign does not reach the funding goal by the deadline, all staked SOL is automatically returned to backers. No funds are lost.',
            },
            {
                q: 'How do I receive the funds?',
                a: 'Once your campaign is funded, the SOL is transferred directly to your connected wallet. You have full control over how you use the funds.',
            },
        ],
    },
    {
        category: 'For Fans',
        questions: [
            {
                q: 'What do I get when I stake SOL?',
                a: 'You receive a non-transferable soul-bound fan token (SBT) that proves your early support. You also earn a share of streaming royalties proportional to your stake.',
            },
            {
                q: 'How are royalties distributed?',
                a: 'Royalties are automatically distributed through smart contracts. When the artist earns from streaming platforms, your share is sent directly to your wallet — no manual claims needed.',
            },
            {
                q: 'Can I sell or transfer my fan token?',
                a: 'No, fan tokens are soul-bound and non-transferable. This ensures that only true early supporters receive royalty benefits.',
            },
            {
                q: 'Is my staked SOL safe?',
                a: 'Yes! Your SOL is held in audited smart contracts. If the campaign fails, you get your SOL back. If it succeeds, you receive your fan token and royalty rights.',
            },
        ],
    },
    {
        category: 'Technical',
        questions: [
            {
                q: 'What wallet do I need?',
                a: 'You can use any Solana-compatible wallet like Phantom, Solflare, Backpack, or Torus. We recommend Phantom for the best experience.',
            },
            {
                q: 'What are the gas fees?',
                a: 'Solana transaction fees are extremely low — typically less than $0.001 per transaction. This makes staking accessible to everyone.',
            },
            {
                q: 'Are the smart contracts audited?',
                a: 'Yes, all SoundStake smart contracts are audited by third-party security firms. Contract addresses are publicly verifiable on-chain.',
            },
        ],
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState('General');
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const toggleQuestion = (key: string) => {
        setOpenIndex(openIndex === key ? null : key);
    };

    const activeFaqs = faqs.find(f => f.category === activeCategory)?.questions || [];

    return (
        <section ref={sectionRef} className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <GlowOrb color="violet" size={500} position={{ x: '30%', y: '40%' }} />
            <TextureOverlay variant="noise" intensity="subtle" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="text-label text-violet-glow mb-4 block">FAQ</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-text-secondary text-lg">
                        Everything you need to know about SoundStake
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
                >
                    {faqs.map((cat) => (
                        <button
                            key={cat.category}
                            onClick={() => setActiveCategory(cat.category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat.category
                                    ? 'bg-violet-primary text-white'
                                    : 'bg-bg-surface text-text-secondary hover:text-text-primary hover:bg-violet-primary/10'
                                }`}
                        >
                            {cat.category}
                        </button>
                    ))}
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3"
                >
                    <AnimatePresence mode="wait">
                        {activeFaqs.map((faq, index) => {
                            const key = `${activeCategory}-${index}`;
                            const isOpen = openIndex === key;

                            return (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                    className="bg-bg-surface/60 backdrop-blur-sm rounded-xl border border-bg-border overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleQuestion(key)}
                                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-violet-primary/5 transition-colors"
                                    >
                                        <span className="text-text-primary font-medium pr-4">{faq.q}</span>
                                        <motion.div
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex-shrink-0"
                                        >
                                            <ChevronDown className="w-5 h-5 text-violet-glow" />
                                        </motion.div>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                                                    <div className="h-px bg-bg-border mb-4" />
                                                    <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-text-secondary mb-4">Still have questions?</p>
                    <button className="inline-flex items-center gap-2 text-violet-glow hover:text-violet-primary font-medium transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>Contact Support</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
