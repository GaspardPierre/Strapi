/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/page/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
       'body': '#F2FAFB',
        'header': '#F2FAFB',
        'navlink' : '#107D98',
        'navhover':'#0D3C48',
        'xsmenu' :'#00A2C7',
        'section':'#0797B9',
        'section-2':'#0D3C48',
        'button' :'#3DB9CF',
        'border-1':'#7DCEDC',
        'border-2' :'#12677E'
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  fontSize: {
    sm: '0.750rem',
    base: '1rem',
    xl: '1.333rem',
    '2xl': '1.777rem',
    '3xl': '2.369rem',
    '4xl': '3.158rem',
    '5xl': '4.210rem',
  },
  fontFamily: {
    heading: 'Noto Sans Tirhuta',
    body: 'Lexend Exa',
  },
  fontWeight: {
    normal: '400',
    bold: '700',
  },
  plugins: [],
}
