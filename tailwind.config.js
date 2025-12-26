/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./renderer/index.html",
    "./renderer/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (Blues - Trust, Focus, Professional)
        primary: {
          50: '#eff6ff',   // Lightest - backgrounds, hover states
          100: '#dbeafe',  // Very light - subtle backgrounds
          200: '#bfdbfe',  // Light - borders, disabled states
          300: '#93c5fd',  // Medium light - secondary text
          400: '#60a5fa',  // Medium - icons, accents
          500: '#3b82f6',  // Base primary - main buttons, links
          600: '#2563eb',  // Dark - hover states, active
          700: '#1d4ed8',  // Darker - pressed states
          800: '#1e40af',  // Very dark - headings
          900: '#1e3a8a',  // Darkest - emphasis
        },

        // Secondary Colors (Green - Success, Growth, Calm)
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Base secondary
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },

        // Accent Colors (Yellow/Amber - Energy, Attention)
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Base accent
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },

        // Neutral/Gray (Structure, Text, Backgrounds)
        neutral: {
          50: '#fafafa',   // Almost white backgrounds
          100: '#f5f5f5',  // Light backgrounds
          200: '#e5e5e5',  // Borders
          300: '#d4d4d4',  // Disabled text
          400: '#a3a3a3',  // Placeholder text
          500: '#737373',  // Secondary text
          600: '#525252',  // Body text
          700: '#404040',  // Dark text
          800: '#262626',  // Headings
          900: '#171717',  // Darkest text
        },

        // Semantic Colors
        success: {
          light: '#d1fae5',
          DEFAULT: '#10b981',  // Green - attendance present, passed
          dark: '#047857',
        },
        
        warning: {
          light: '#fef3c7',
          DEFAULT: '#f59e0b',  // Amber - warnings, late attendance
          dark: '#b45309',
        },
        
        danger: {
          light: '#fee2e2',
          DEFAULT: '#ef4444',  // Red - absent, failed, errors
          dark: '#b91c1c',
        },
        
        info: {
          light: '#dbeafe',
          DEFAULT: '#3b82f6',  // Blue - informational messages
          dark: '#1e40af',
        },

        // Educational Context Colors
        attendance: {
          present: '#10b981',   // Green
          absent: '#ef4444',    // Red
          late: '#f59e0b',      // Amber
          excused: '#6366f1',   // Indigo
        },

        grades: {
          excellent: '#10b981', // Grade 1-2 (Green)
          good: '#3b82f6',      // Grade 3-5 (Blue)
          fair: '#f59e0b',      // Grade 6-7 (Amber)
          poor: '#ef4444',      // Grade 8-9 (Red)
        },

        fees: {
          paid: '#10b981',      // Fully paid
          partial: '#f59e0b',   // Partially paid
          unpaid: '#ef4444',    // Unpaid
          overpaid: '#8b5cf6',  // Overpayment (Purple)
        },
      },

      // Typography Scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
      },

      // Spacing (for consistency)
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },

      // Border Radius
      borderRadius: {
        'sm': '0.25rem',   // 4px
        'DEFAULT': '0.375rem', // 6px
        'md': '0.5rem',    // 8px
        'lg': '0.75rem',   // 12px
        'xl': '1rem',      // 16px
        '2xl': '1.5rem',   // 24px
      },

      // Box Shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
