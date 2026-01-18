/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B1220',
          surface: '#121A2F',
          muted: '#1A2440',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0AEC0',
          muted: '#718096',
        },
        brand: {
          primary: '#F5C542',
          secondary: '#FF9F1C',
        },
        success: '#22C55E',
        danger: '#EF4444',
        warning: '#F59E0B',
      },
      fontSize: {
        'heading-xl': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'heading-lg': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'heading-md': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        body: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '12px',
        xl: '16px',
        full: '9999px',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.25)',
        floating: '0 10px 30px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
