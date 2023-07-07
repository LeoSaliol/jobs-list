/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['League Spartan', ...defaultTheme.fontFamily.sans],
            },
            rotate: {
                17: '360deg',
            },
            colors: {
                primaryCyan: 'hsl(180, 29%, 50%)',
                bgWhite: 'hsl(180, 52%, 96%)',
                bgCard: 'hsl(180, 31%, 95%)',
                secondaryCyan: 'hsl(180, 8%, 52%)',
                darkCyan: 'hsl(180, 14%, 20%)',
                bgBadge: '#a9d1d538',
            },
            boxShadow: {
                '3xl': ' 0px 10px 16px -7px hsl(180, 29%, 50%)',
                '4xl': '  2px 0px 25px -3px hsl(180, 8%, 52%)',
            },
        },
    },
    plugins: [],
};
