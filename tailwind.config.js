/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
                    
            "primary": "#4f7942",
                    
            "secondary": "#745644",
                    
            "accent": "#62301F",
                    
            "neutral": "#495d32",
                    
            "base-100": "#353839",
                    
            "info": "#DDFFB6",
                    
            "success": "#36D399",
                    
            "warning": "#FBBD23",
                    
            "error": "#F87272",
        },
      },
    ],
  },
}
