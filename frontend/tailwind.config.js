/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // SoundStake Custom Color System
        'bg-base': '#080810',
        'bg-surface': '#0F0F1A',
        'bg-elevated': '#161625',
        'bg-border': '#1E1E30',

        'violet-primary': '#7C3AED',
        'violet-glow': '#8B5CF6',
        'violet-muted': '#4C1D95',

        'gold-primary': '#F59E0B',
        'gold-light': '#FCD34D',

        'text-primary': '#F0F0FF',
        'text-secondary': '#8888AA',
        'text-tertiary': '#55556A',

        'green-live': '#10B981',
        'red-warning': '#EF4444',

        // Keep shadcn defaults for compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'mono': ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'violet-glow': '0 0 30px rgba(124, 58, 237, 0.5)',
        'violet-card': '0 0 60px rgba(124, 58, 237, 0.15)',
        'navbar': '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(124, 58, 237, 0.05)',
        'navbar-scroll': '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(124, 58, 237, 0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-live": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 4s ease-in-out infinite",
        "pulse-live": "pulse-live 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "count-up": "count-up 0.5s ease-out forwards",
      },
      backgroundImage: {
        'hero-bloom': 'radial-gradient(ellipse 600px 500px at 70% 50%, rgba(124, 58, 237, 0.12) 0%, transparent 70%)',
        'gold-bloom': 'radial-gradient(ellipse 400px 300px at 30% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 70%)',
        'violet-gold-gradient': 'linear-gradient(90deg, #7C3AED 0%, #F59E0B 100%)',
        'gold-line': 'linear-gradient(90deg, #F59E0B 0%, #FCD34D 100%)',
        'card-shimmer': 'linear-gradient(90deg, rgba(76, 29, 149, 0.2) 0%, transparent 50%, rgba(76, 29, 149, 0.2) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
